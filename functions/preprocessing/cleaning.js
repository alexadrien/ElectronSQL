import sansAccent from 'sans-accent';

export default function(filename, equivalences) {
  return Object.keys(equivalences).reduce((accumulator, currentValue) => {
    const regex = RegExp("\\b" + currentValue + "\\b", "g");
    return accumulator.replace(regex, equivalences[currentValue]);
  }, sansAccent()(filename.toLowerCase()));
}
