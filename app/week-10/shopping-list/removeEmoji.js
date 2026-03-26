 // feedback:removeEmoji extracted as a named function and called inside handleItemSelect — clean separation, consider extracting into a utility function.
 
 // Remove emojis from string
export default function removeEmoji(str) {
        return str.replace(
            /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
            ''
        );
}