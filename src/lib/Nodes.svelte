<script lang="ts">
    import { derived } from 'svelte/store';
	import { InstancedMesh } from "@threlte/core";

	import NodeInstance from "./NodeInstance.svelte";
    import { G, showSubstrates, minimumFC } from "./../stores";

	export let nodeGeometry;
	export let nodeMaterial;
	export let transparentMaterial;
	
    function generateSolidTransparent(graph, minFC, showSubs){

        /*
        Nodes with:
            a
            

        */
        let solid = new Set<string>();
        let transparent = new Set<string>();
        let hasFC = graph.getAttribute("hasFC");
        graph.forEachEdge((edge, attr, source, target, sAttr, tAttr) => {
            if (!attr.isFirstLink || source === target) return;

            // console.log(sAttr.isKinase, tAttr.isKinase)

            if (!hasFC) { // make normal, no foldchange data
                if(showSubs){
                    solid.add(source);
                    solid.add(target);
                } else {
                    if(sAttr.isKinase) solid.add(source);
                    if(tAttr.isKinase) solid.add(target);
                }      
            } // done
            else {
                if(showSubs){
                    let show = Math.abs(attr?.fc ?? 0) > minFC;
                    
                    if(show){
                        solid.add(source);
                        solid.add(target);
                    } else {
                        transparent.add(source);
                        transparent.add(target);
                    }

                } else {
                    let show = Math.abs(attr?.fc ?? 0) > minFC;
                    
                    if(show){
                        if(sAttr.isKinase) solid.add(source);
                        if(tAttr.isKinase) solid.add(target);
                    } else {
                        if(sAttr.isKinase) transparent.add(source);
                        if(tAttr.isKinase) transparent.add(target);
                    }
                } 

            }



            // else {
            //     let fc = attr?.fc ?? 0;
            //     if (Math.abs(fc) > minFC) {
            //         //solid
            //         solid.add(source);
            //         solid.add(target);
            //     } 
            //     else {
            //         //transparent
            //         transparent.add(source);
            //         transparent.add(target);
            //     }
            // }
        });

        // if (!showSubs) {
        //     solid = new Set([...solid].filter((x) => graph.getNodeAttribute(x, "isKinase")));
        //     transparent = new Set(
        //         [...transparent].filter((x) => graph.getNodeAttribute(x, "isKinase"))
        //     );
        // }

        //TODO Optimize, O(N^2)
        transparent = new Set([...transparent].filter((i) => !solid.has(i)));

        let solidArr = Array(...solid);
        let transparentArr = Array(...transparent);
        
        // console.log(solidArr, transparentArr);
       
        return [solidArr, transparentArr];

       
    }

    // solidArr, transparentArr;
    let solidTransArr = derived([G, minimumFC, showSubstrates], ($values, set) => {
        set(generateSolidTransparent($values[0], $values[1], $values[2]))
    });

</script>

<InstancedMesh geometry={nodeGeometry} material={nodeMaterial} interactive>
	{#each $solidTransArr[0] as n (n+"_"+String($G.getAttribute("id")))}
            <NodeInstance graph={$G} nodeID={n} greyedOut={false} />
    {/each}
</InstancedMesh>

<InstancedMesh geometry={nodeGeometry} material={transparentMaterial} ignorePointer>
	{#each $solidTransArr[1] as n (n+'_ghost_'+String($G.getAttribute("id")))}
		<NodeInstance graph={$G} nodeID={n} greyedOut={true} />
	{/each}
</InstancedMesh>
