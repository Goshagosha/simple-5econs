const Simple5econs = (() => {
	const defineStatusIcons = function(data) {
		window.CONFIG.statusEffects = [
			{
			    label:  "Concentrating",
			    id:  "concentrating",
			    icon: "modules/simple-5econs/icons/concentrating.svg",
			},
			{
			    label: "Blinded", 
			    id: "blinded", 
			    icon: "modules/simple-5econs/icons/blinded.svg",
			},
			{
			    label: "Charmed",
			    id: "charmed",
			    icon: "modules/simple-5econs/icons/charmed.svg", 
			},
			{
			    label:  "Deafened", 
			    id:  "deafened", 
			    icon: "modules/simple-5econs/icons/deafened.svg", 
			},
			{
			    label: "Frightened",
			    id: "frightened",
			    icon:"modules/simple-5econs/icons/frightened.svg",
			},
			{
			    label: "Grappled",
			    id: "grappled",
			    icon:"modules/simple-5econs/icons/grappled.svg",
			},
			{
			    label: "Incapacitated",
			    id: "incapacitated",
			    icon:"modules/simple-5econs/icons/incapacitated.svg",
			},
			{
			    label: "Invisible",
			    id: "invisible",
			    icon:"modules/simple-5econs/icons/invisible.svg",
			},
			{
			    label: "Paralyzed",
			    id: "paralyzed",
			    icon:"modules/simple-5econs/icons/paralyzed.svg",
			},
			{
			    label: "Petrified",
			    id: "petrified",
			    icon:"modules/simple-5econs/icons/petrified.svg",
			},
			{
			    label: "Poisoned",
			    id: "poisoned",
			    icon:"modules/simple-5econs/icons/poisoned.svg",
			},
			{
			    label: "Prone",
			    id: "prone",
			    icon:"modules/simple-5econs/icons/prone.svg",
			},
			{
			    label: "Restrained",
			    id: "restrained",
			    icon:"modules/simple-5econs/icons/restrained.svg",
			},
			{
			    label: "Stunned",
			    id: "stunned",
			    icon:"modules/simple-5econs/icons/stunned.svg",
			},
			{
			    label: "Unconscious",
			    id: "unconscious",
			    icon:"icons/svg/unconscious.svg",
			},
			{
			    label: "Dead",
			    id: "dead",
			    icon:"icons/svg/skull.svg",
			},
			{
			    id: "aid",
			    label: "Aid",
			    icon:"systems/dnd5e/icons/spells/heal-sky-1.jpg",
			},
			{
			    id: "bless",
			    label: "Bless",
			    icon:"modules/plutonium/media/icon/spell/phb-bless.jpg",
			},
			{
			    id: "bane",
			    label: "Bane",
			    icon:"modules/plutonium/media/icon/spell/phb-bane.jpg",
			},
			{
			    label: "Bardic inspiration",
			    id: "bardic inspiration",
			    icon:"systems/dnd5e/icons/skills/yellow_08.jpg",
			},
			{
			    label: "Vicious mockery",
			    id: "vicious mockery",
			    icon:"modules/plutonium/media/icon/spell/phb-vicious-mockery.jpg",
			},
			{
			    label: "Witch bolted",
			    id: "witch bolted",
			    icon:"modules/plutonium/media/icon/spell/phb-witch-bolt.jpg",
			},
			{
			    label: "Exhaustion 1",
			    id: "exhaustion 1",
			    icon:"modules/simple-5econs/icons/exhaustion1.svg",
			},
			{
			    label: "Exhaustion 2",
			    id: "exhaustion 2",
			    icon:"modules/simple-5econs/icons/exhaustion2.svg",
			},
			{
			    label: "Exhaustion 3",
			    id: "exhaustion 3",
			    icon:"modules/simple-5econs/icons/exhaustion3.svg",
			},
			{
			    label: "Exhaustion 4",
			    id: "exhaustion 4",
			    icon:"modules/simple-5econs/icons/exhaustion4.svg",
			},
			{
			    label: "Exhaustion 5",
			    id: "exhaustion 5",
			    icon:"modules/simple-5econs/icons/exhaustion5.svg",
			}
		]
	};
	
  // HOOKS  
  Hooks.once("ready", function() {
		defineStatusIcons();
  });
})();
