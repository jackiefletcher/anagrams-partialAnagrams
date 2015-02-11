describe("anagram", function() {
  it("returns an array of anagrams", function() {
    expect(anagram("and", ["dan"])).to.eql(["dan"]);
  });

  it("returns an array of anagrams from multiple words", function() {
    expect(anagram("pan", ["nap", "cat", "pan"])).to.eql(["nap", "pan"]);
  });

  it("returns an array of anagrams from multiple words and is NOT case sensitive", function() {
    expect(anagram("pan", ["nap", "cAt", "Pan"])).to.eql(["nap", "Pan"]);
  });


  it("returns an array of anagrams from multiple words and is NOT case sensitive", function() {
    expect(partialAnagram("napping", "nap")).to.eql(true);
  });

});
