document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('story-form');
    const storyOutput = document.getElementById('story-output');
    const storyText = document.getElementById('story-text');
    const newStoryBtn = document.getElementById('new-story');
    const storyFeedback = document.getElementById('story-feedback');
    const ratingButtons = document.querySelectorAll('.rating-btn');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        generateStory();
    });

    newStoryBtn.addEventListener('click', function () {
        generateStory();
    });

    function generateStory() {
        const character = document.getElementById('character').value.trim();
        const setting = document.getElementById('setting').value.trim();
        const object = document.getElementById('object').value.trim();

        if (character && setting && object) {
            const story = `${character} wandered into ${setting}. They stumbled upon a ${object} that sent shivers down their spine. The sky darkened, the wind howled, and ${character} knew that something terrible was about to happen. ${character} took a deep breath and ventured deeper into the ${setting}, each step echoing in the eerie silence.

            The ${setting}'s long-forgotten halls were filled with shadows that seemed to move on their own. Strange, indistinct whispers echoed from unseen corners. ${character} felt a cold draft, as if the ${setting} itself was breathing.

            As ${character} approached the ${object}, they noticed their reflection was delayed, moving a second or two after they did. When ${character} touched the ${object}'s surface, a chill ran through their body. The reflection suddenly grinned menacingly, and the room grew colder.

            ${character} heard footsteps approaching from behind but saw no one when they turned around. The ${setting}'s doors creaked open and shut, and the distant sound of a music box played a haunting tune.

            Terrified yet compelled to uncover the ${setting}'s secrets, ${character} pressed on. They found a diary near the ${object}, its pages filled with cryptic messages and warnings about the ${object}'s cursed nature. According to the diary, those who gazed too long into the ${object} would be trapped inside it, becoming part of the ${setting}'s ghostly population.

            The hairs on ${character}'s neck stood up as they realized they were not alone. Shadows flitted across the walls, and ghostly figures began to appear in the ${object}, each one a victim of the ${object}'s curse.

            Determined to escape the same fate, ${character} ran towards the ${setting}'s exit, but the door slammed shut, trapping them inside. The whispers grew louder, and the air became thick with dread.

            In a final act of desperation, ${character} smashed the ${object}, hoping to break the curse. The ${object} shattered into countless shards, and a deafening silence filled the ${setting}. The ghostly figures vanished, and the doors finally opened, allowing ${character} to escape.

            Breathing heavily, ${character} emerged from the ${setting}, vowing never to return. They could still feel the ${object}'s cold grip on their soul, a chilling reminder of the horrors they had narrowly escaped.`;

            storyText.textContent = story;
            storyOutput.classList.remove('hidden');

            showFeedback();
        } else {
            alert('Please fill in all fields.');
        }
    }

    function showFeedback() {
        storyFeedback.classList.remove('hidden');
    }

    ratingButtons.forEach(button => {
        button.addEventListener('click', function () {
            const rating = this.dataset.rating;
            alert(`Thank you for rating the story ${rating}/5!`);
            resetForm();
        });
    });

    function resetForm() {
        document.getElementById('story-form').reset();
        storyOutput.classList.add('hidden');
        storyFeedback.classList.add('hidden');
    }
});
