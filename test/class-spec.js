const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {
  describe("Word constructor function", function () {
    let word;
    beforeEach(() => {
      word = new Word('bunny');
    });
    it('should have a "word" property', function () {
      expect(word.word).to.exist;
    });

    it('should set the "word" property when a new word is created', function () {
      expect(word.word).to.equal('bunny');
    });
  });

  describe("removeVowels function", function () {
    let word;
    beforeEach(() => {
      word = new Word('bunny');
    });
    it("should return a the word with all vowels removed", function () {
      let newWord = word.removeVowels();
      expect(newWord).to.equal('bnny');
    });
  });

  describe("removeConsonants function", function () {
    let word;
    beforeEach(() => {
      word = new Word('bunny');
    });
    it("should return the word with the consonants removed", function () {
      let newWord = word.removeConsonants();
      expect(newWord).to.equal('u');
    });
  });

  describe("pigLatin function", function () {
    let word;
    beforeEach(() => {
      word = new Word('bunny');
    });
    it("should return the word converted to pig latin", function () {
      let newWord = word.pigLatin();
      expect(newWord).to.equal('unnybay');
    });
  });
});
