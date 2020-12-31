import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'storywords';
  words = [];

  wordOptions = `Abnormal,Adventure,Alchemy,Amulet,Apparition,Apprentice,Awe,Beast,Beauty,Berserk,Bizarre,Blind,Brew,
Castle,Cauldron,Cave,Chalice,Charming,Clairvoyant,Clock,Collapse,Conjure,Conspirator,Creature,Crisis,Crow,Crystal ball,Curious,Curse
Dance,Daring,Deformity,Delirious,Demon,Detect,Detective,Disappear,Disaster,Dragon,Dramatic,Dread,Dream,Dwarf,Eerie,Elf,Empire,Enchant,
Evil,Experience,Fable,Fairy,Familiar,Fanciful,Fantastic,Favors,Fiery,Figment,Folklore,Foolish,Forces,Forgery,Garb,Ghost,Giant,Gift,
Glimmer,Gnome,Goblin,Godmother,Gowns,Grateful,Graveyard,Grotesque,Hag,Hallucinate,Harbinger,Helpful,Herbs,Heroic,Horror,Howls,Hump,
Illusion,Image,Imp,Impressive,Improvise,Impulse,Incantation,Incognito,Informative,Ingenious,Inspiration,Invisible,Jiggle,Joking,
Keepsake,Kettle,Kidnap,King,Kingdom,Lands,Legend,Leprechaun,Lore,Lucky,Lunar,Magic,Magician,Majesty,Malevolence,Mask,Miracle,Mischief,
Monster,Moon,Muse,Mystery,Mystic,Myth,Nature,Necromancer,Nemesis,Newt,Notion,Odd,Ogre,Oracle,Otherworldly,Overwhelm,Owl,Pattern,Perform,
Pixie,Plot,Poison,Potent,Potion,Power,Prey,Prince,Prophet,Protect,Prowl,Quail,Quake,Quash,Quiver,Queen,Quest,Quizzical,Rage,Realm,
Reasoning,Reign,Repel,Robe,Rule,Sage,Scare,Scold,Scroll,Seeking,Seer,Sorcerer,Sorcery,Spell,Spider,Spirit,Star,Story,Supernatural,
Superstition,Talisman,Terror,Thrill,Torch,Tragic,Transform,Trick,Troll,Unbelievable,Unexplained,Unicorn,Unusual,Vampire,Vanguard,
Vanish,Vanquish,Vicious,Wail,Wand,Ward,Weird,Werewolf,Whim,Wicked,Wisdom,Wish, Witch,Worship,Wrinkled,Youth`
.split(',').map(word => word.trim());

addWord(){
  let index = Math.floor(Math.random() * this.wordOptions.length);
  let word = this.wordOptions[index];
  while(this.words.filter(w => w.word === word).length){
    console.log('already there');
    index = Math.floor(Math.random() * this.wordOptions.length);
    word = this.wordOptions[index];
  }
  this.words.push({word, used: false});
}

begin(){
  for(let i = 0; i < 7; i++){
    this.addWord();
  }
}


}
