var tags = ['li', 'span', 'div', 'span', 'h3', 'a', 'div', 'span', 'a', 'li', 'div', 'div'];

var tagCounts = {};
for (var i = 0; i < tags.length; i++) {
    var tag = tags[i];
    if (tagCounts[tag] === undefined) {
        tagCounts[tag] = 1;
    } else {
        tagCounts[tag]++;
    }
}

console.log(tagCounts);

var sortedTagCounts = Object.keys(tagCounts).sort((a, b) => tagCounts[b] - tagCounts[a])
console.log(sortedTagCounts);
