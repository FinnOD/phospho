<script lang="ts">
	import { MeshInstance } from "@threlte/core";
	import {
		Vector3,
		Spherical,
		Matrix4,
		Quaternion,
		ConeGeometry,
		InstancedMesh as ThreeInstancedMesh,
		MeshLambertMaterial,
		Color
	} from "three";
	import type MultiDiGraph from "graphology";
	import { minimumFC, showUnselected } from "./../stores";

	export let graph: MultiDiGraph;
	export let width: number;
	export let showSubstrates: boolean;
	export let geometry;
	export let material;

	const coolColor = new Color(0x2A729A);
	const warmColor = new Color(0xFF690d);
	const greyColor = coolColor.clone().lerp(warmColor, 0.5).offsetHSL(0, -255, 0);

	let instancedEdges;
	let transparentInstancedEdges;
	let instancedCones;
	let transparentInstancedCones;

	const arrowLength = 10;
	let cone = new ConeGeometry(1, 1, 10);

	$: if (graph) {

		const transparentMaterial = new MeshLambertMaterial({
			opacity: 0.05,
			transparent: true,
			color: greyColor,
		});

		instancedEdges = new ThreeInstancedMesh(geometry, material, 10000);
		transparentInstancedEdges = new ThreeInstancedMesh(
			geometry,
			transparentMaterial,
			10000,
		);
		instancedCones = new ThreeInstancedMesh(cone, material, 10000);
		transparentInstancedCones = new ThreeInstancedMesh(cone, transparentMaterial, 10000);

		let hasFC: boolean = graph.getAttribute("hasFC");

		let i = 0;
		let ti = 0;
		graph.forEachEdge((edge, attr, source, target, sAttr, tAttr) => {
			if (!attr.isFirstLink || source === target) return;
			if (!showSubstrates && !(sAttr.isKinase && tAttr.isKinase)) return;

			const sPos = new Vector3(sAttr.x, sAttr.y, sAttr.z);
			const tPos = new Vector3(tAttr.x, tAttr.y, tAttr.z);

			const sRad = sAttr.radius ?? 1;
			const tRad = tAttr.radius ?? 1;

			const direction = new Vector3().subVectors(tPos, sPos);
			const distance = direction.length();
			
			const sEdge = sPos.clone().lerp(tPos.clone(), sRad/distance);
			const tEdge = sPos.clone().lerp(tPos.clone(), 1-((tRad+(arrowLength)+sRad)/distance));
			const arrowPos = sPos.clone().lerp(tPos.clone(), 1-((tRad+(arrowLength/2)+sRad)/distance));
			

			const middle = sEdge.clone().lerp(tEdge.clone(), 0.5);
			const angleVec = tEdge.clone().add(sEdge.clone().multiplyScalar(-1));
			const spherical = new Spherical().setFromVector3(angleVec);

			let m = new Matrix4();
			let q = new Quaternion();
			q.setFromUnitVectors(new Vector3(0, 1, 0), direction.normalize());
			m.compose(middle, q, new Vector3(width, spherical.radius, width));


			let Cm = new Matrix4();
			Cm.compose(arrowPos, q, new Vector3(1.5, arrowLength, 1.5));

			
			if (!hasFC) {
				instancedEdges.setMatrixAt(i, m);
				instancedEdges.setColorAt(i, greyColor);
				instancedCones.setMatrixAt(i, Cm);
				instancedCones.setColorAt(i, greyColor);
				i++;
			} else {
				let fc = attr?.fc ?? 0;
				let strength = Math.min(Math.max(Math.abs(fc), 0.1) / 4, 1);
				let newWidth = 3 * width * strength;
				newWidth = Math.abs(fc) > $minimumFC ? newWidth : 0.25;
				let arrowWidth = Math.max(1.5*newWidth, 0.2);
				m.compose(middle, q, new Vector3(newWidth, spherical.radius, newWidth));
				Cm.compose(arrowPos, q, new Vector3(arrowWidth, arrowLength, arrowWidth));

				if (Math.abs(fc) > $minimumFC) {
					let fcCol = fc > 0 ? warmColor : fc < 0 ? coolColor : greyColor;
					instancedEdges.setMatrixAt(i, m);
					instancedEdges.setColorAt(i, fcCol);
					instancedCones.setMatrixAt(i, Cm);
					instancedCones.setColorAt(i, fcCol);
					i++;
				} else {
					transparentInstancedEdges.setMatrixAt(ti, m);
					transparentInstancedCones.setMatrixAt(ti, Cm);
					ti++;
				}

			}
		});
	}
</script>

{#if $showUnselected}
	<MeshInstance mesh={transparentInstancedCones} ignorePointer />
	<MeshInstance mesh={transparentInstancedEdges} ignorePointer />
{/if}
<MeshInstance mesh={instancedCones} ignorePointer />
<MeshInstance mesh={instancedEdges} ignorePointer />
