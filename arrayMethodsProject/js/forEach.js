const songs = ["song1", "song2", "song3", "song4", "song5"];

const forExt = [];
const forEachExt = [];

for(let i = 0; i < songs.length; i++) {
  forExt.push(` ${songs[i]}.mp3`);
}

songs.forEach((item) => {
  forEachExt.push(` ${item}.mp3`)
})

console.log(songs);
console.log(`For loop:${forExt}`);
console.log(`forEach:${forEachExt}`);