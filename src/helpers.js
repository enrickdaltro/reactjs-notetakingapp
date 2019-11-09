// This funcition is useful because we want to update the database live
// without refreshing everytime we put a letter
export default function debounce(a, b, c) {
  var d, e;
  return function() {
    function h() {
      d = null;
      c || (e = a.apply(f, g));
    }
    var f = this,
      g = arguments;
    return (
      clearTimeout(d), (d = setTimeout(h, b)), c && !d && (e = a.apply(f, g)), e
    );
  };
}
// This function works on the preview of the left bar, removing HTML from preview
export function removeHTMLTags(str) {
  return str.replace(/<[^>]*>?/gm, "");
}
