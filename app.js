const sentences = [
  "      ABC   abd",
  "ABC  abc        ",
  `       first
second third      
           forth
           
sentence






      
    
      `,
];

const filterSentence = (sentences) => {
  const filtered = [];
  sentences.forEach((s) => filtered.push(s.trim()));
  return filtered;
};

const filter = filterSentence(sentences);
console.log(filter);
console.log(typeof filter);

const trimedSentence = sentences.map((sentence) => sentence.trim());
console.log(trimedSentence);
console.log(typeof trimedSentence);
