<script lang="ts">
	export let active: boolean;
	$: console.log(active);
</script>

<div id="menu-icon" class:active on:click style={"--transition-time: 0.2s;"}>
	<span class:active class="line line-1" />
	<span class:active class="line line-2" />
	<span class:active class="line line-3" />
</div>

<style>
	#menu-icon {
		--icon-height: 26px;
		width: 34px;
		height: var(--icon-height);

		position: absolute;
		z-index: 1000;
		margin: (20px * 2) auto 50px auto;
		margin-top: 10px;
		margin-left: 10px;
	}

	#menu-icon .line {
		display: block;
        background: white;
		width: 100%;
		height: 12%;
		position: absolute;
		left: 0;
		transition: all var(--transition-time);
		-webkit-transition: all var(--transition-time);
		-moz-transition: all var(--transition-time);
	}
    

	#menu-icon .line-1 {
		top: 0;
        
	}
	#menu-icon .line-2 {
		top: 50%;
	}
	#menu-icon .line-3 {
		top: 100%;
	}
    #menu-icon .line.active {
        background: #404040;
    }

	#menu-icon:hover,
	#menu-icon:focus .line {  
		transform: scale(105%);
		/* -webkit-transform: translateY(8px / 2 * -1);
		-moz-transform: translateY(8px / 2 * -1); */
	}
    
    .active .line-1 {
		transform: translateY(calc(0.5 * var(--icon-height))) translateX(0px) rotate(45deg);
		-webkit-transform: translateY(calc(0.5 * var(--icon-height))) translateX(0px) rotate(45deg);
		-moz-transform: translateY(calc(0.5 * var(--icon-height))) translateX(0px) rotate(45deg);
	}
	.active .line-2 {
		opacity: 0;
		transform: rotateY(90deg);
	}
	.active .line-3 {
		transform: translateY(calc(-0.5 * var(--icon-height))) translateX(0px) rotate(-45deg);
		-webkit-transform: translateY(calc(-0.5 * var(--icon-height))) translateX(0px)
			rotate(-45deg);
		-moz-transform: translateY(calc(-0.5 * var(--icon-height))) translateX(0px) rotate(-45deg);
	}
</style>
