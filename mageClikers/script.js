let magi = 0;
const mage = document.getElementById("mage");
const manaCount = document.getElementById("mana_count");
const spell_btn = document.getElementById("spell");

mage.addEventListener('click',() => {
	magi ++;
	manaCount.textContent = magi
	console.log("mage clicked");
	if(magi  >= 10 ) {
		spell_btn.disabled = false;
		}
	});
	
spell.addEventListener ('click',() => {
	if (magi >= 10);
	lost_mana = magi - 10;
	magi =  lost_mana;
	manaCount.textContent = magi;
	alert("fire ball cast!");
	spell_btn.disabled = magi < 10;
  
  });

	
