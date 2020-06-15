
$(function() {

    // Populate using an object literal

    WTF.init({

        heading: [
            "It's time to kill the party",
            "I got nothing, how about",
            "Scraping the bottom of the barrel, how about you try something like",
            "This one is totally cool",
            "I can shake things up a little",
            "best idea yet",
            "they will talk about this one for years",
            "kablam!",
            "this one's a little odd",
            "I'm trying",
            "are kids playing? you don't want them to know about this one",
            "this should be easy",
            "this is a little difficult"
        ],
        response: [
            "*snort*",
            "No, give me another one",
            "Too predictable",
            "Um, no",
            "Did that last week",
            "interesting, but no",
            "that will give my players nightmares",
            "hard pass on that one",
            "you didn't try at all with that",
            "yawn",
            "the grammer is wrong on that one",
            "boring",
            "that was the same as the last recomendation you made"
        
        ],
        template: [
            // "@person is @looking a @description @object",
            // "A @description @animal is @activity while @activity",
            // "@person stole a @description @object from @person, they will pay @payment to get it back",
            // "A @animal is lost, @person will pay @payment for it's safe return",
            // "A @animal has killed and will kill again if not stopped, @person will pay @payment for it's head",
            // "deep in the woods is a cave that contains the @description @object",
            // "@person says that @person needs to disapear, they will pay @payment",
            // "@person walks up to you and begins talking about @object but gets distracted by @person. They whisper they will pay @payment for it discretely",
            // "across the desert is a @object but it is guarded by a @description @animal",
            // "every month on the full moon a @animal runs through the town. @person is missing and @person fears for their @object",
            // "@description @animal and @description @animal are fighting. @person wants you to stop it",
            // "@person has @description @object and @person wants you to bring it back. They give you a @description @object as a prepayment and promise to pay @payment more",
            // "a @animal is actually @person, they need @description @object from @person to change back",
            // "a @animal has followed you all day dragging a @description @object behind it",
            // "@person has been shrunk and placed in a @object, @person will pay @payment to free them",
            "@person offers you a @object to take the @animal to the next town, on the way there you are stopped by a @odesc @animal"
        ],
        animal: [
            "dog",
            "cat",
            "rabbit",
            "owlbear",
            "goblin",
            "orc",
            "dragon",
            "frog",
            "unicorn",
            "horse",
            "slug",
            "yeti",
            "troll",
            "ogre",
            "devil",
            "zombie",
            "skeleton",
            "werewolf",
            "owl",
            "giant beetle",
            "puppy"
            
        ],
        payment: [
            "hansomly",
            "100 gold",
            "500 gold",
            "2 copper",
            "travel expenses",
            "one slice cake and a birhtday hat",
            "in magical components",
            "a rusty old key with a strange engraving",
            "10 gold",
            "20 gold",
            "30 gold",
            "40 gold",
            "50 gold",
            "60 gold",
            "70 gold",
            "80 gold",
            "90 gold",
            "200 gold",
            "300 gold",
            "400 gold",
            "600 gold",
            "in blood",
            "a dozen eggs",
            "an all incusive trip to the ocean side"

        ],
        person: [
            "the mayor",
            "the local theives guild",
            "a child on the street",
            "An aspiring actor",
            "someone lurking in the shadows",
            "the town drunk",
            "a stranger who wandered into town",
            "the king",
            "an old woman",
            "the farmer's daughter",
            "A farmer",
            "The farmer's daughter's boyfriend",
            "the cook",
            "the local magic store owner",
            "the bar tender",
            "the black smith",
            "the wizard",
            "the mage",
            "the coachman",
            "the necromancer",
            "the old man in the woods",
            "the fisherman",
            "the woman in the tavern",
            "the house keeper",
            "the bounty hunter",
            "the huntress",
            "a local bard",
            "a traveling bard",
            "a fighter",
            "someone whispering at your table",
            "the girl sitting by the fountain",
            "the theif",
            "a dwarf",
            "an elf",
            "a guy with a sword",
        ],
        looking: [
            "looking for",
            "searching for",
            "hunting for",
            "gathering up",
            "paying hansomly for",
            "screaming about",
            "hearings whisperings of",
            "reading in a dusty old book about",
            "talking loudly about",
            "talking in hushed tones about",
            "looking at a treasure map to",
            "whispering about",
            "sneaking out of town with",
        ],
        trouble: [

        ],
        activity: [
            "running around",
            "dancing",
            "puffing up",
            "rampaging through the city",
            "entering the kings court",
            "stopping to smell the roses",
            "threatening bystanders",
            "making a mess",
            "attacking people",
            "breathing fire",
            "totally wanting to kill something",
            "plotting something evil",
            "staring down the party",
            "flying around",
            "eating people",
            "singing",
            "sighing",
            "pondering",
            "roaring"

        ],
        object: [
            "hat",
            "sword",
            "gem",
            "dragon jaw bone",
            "glass bauble",
            "statue",
            "amulet",
            "book",
            "scroll",
            "mace",
            "treasure chest",
            "bow and arrow set",
            "mug",
            "pet cat",
            "set of armor",
            "jar with a hand in it",
            "jar with magical essence in it",
            "healing potions",
            "skull",
            "scales",
            "wooden chest",
            "coin purse",
            "box",
            "booklet",
            "diadem",
            "flag",
            "banner",
            "lantern",
            "banner of the king",
            "jewlery"
        ],
        description: [
            "red",
            "blue",
            "green",
            "yellow",
            "purple",
            "teal",
            "rainbow",
            "silver",
            "gold",
            "brown",
            "black",
            "bloody",
            "tiny",
            "huge",
            "intricately carved wood",
            "intricately carved stone",
            "intricately etched metal",
            "intricately engraved crystal",
            "intricately sculpted earthen",
            "roughly carved wood",
            "roughly carved stone",
            "roughly hammered metal",
            "roughly chiseld crystal",
            "roughly sculpted earthen",
            "expertly carved wood",
            "expertly carved stone",
            "expertly etched metal",
            "expertly engraved crystal",
            "expertly sculpted earthen",
            "terribly carved wood",
            "terribly carved stone",
            "terribly hammered metal",
            "terribly chiseld crystal",
            "terribly sculpted earthen",
            "wood",
            "stone",
            "metal",
            "crystal",
            "earthen",
            "massive",
            "diminuative",
            "smelly",
            "fine",
            "masterwork",
            "artifact",
            "fluffy",
            "undead",
            "soft",
            "wierd",
            "odd",
            "dangerous",
            "magical",
        ],
        odesc: [
            "red",
            "blue",
            "green",
            "yellow",
            "purple",
            "teal",
            "rainbow",
            "silver",
            "gold",
            "brown",
            "black",
            "bloody",
            "tiny",
            "huge",
            "massive",
            "diminuative",
            "smelly",
            "fine",
            "artifact",
            "fluffy",
            "undead",
            "soft",
            "wierd",
            "odd",
            "dangerous",
            "brave",
            "bautiful",
            "briliant",
            "dramatic"

        ]
    });

    // // Populate using a JSON file
    // WTF.init( 'sample.json' );

    // // Populate using a Google spreadsheet ID (you must publish it first!)
    // @see https://support.google.com/drive/answer/37579?hl=en
    // WTF.init( '0AvG1Hx204EyydF9ub1M2cVJ3Z1VGdDhTSWg0ZV9LNGc' );

});