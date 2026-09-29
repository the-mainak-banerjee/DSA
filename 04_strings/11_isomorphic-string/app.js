function isIsomorphic(s, t) {
  let mapOfStoT = {}
  let mapOfTtoS = {}

  for (let i = 0; i < s.length; i++){
    if (!mapOfStoT[s[i]] && !mapOfTtoS[t[i]]) {
      mapOfStoT[s[i]] = t[i]
      mapOfTtoS[t[i]] = s[i]
    } else if (mapOfStoT[s[i]] !== t[i]) {
      return false
    } else if (mapOfTtoS[t[i]] !== s[i]) {
      return false
    }
  }

  return true
}



console.log("foo, bar", isIsomorphic("foo", "bar"))
console.log("far, boo", isIsomorphic("far", "boo"));
console.log("egg, add", isIsomorphic("egg", "add"));