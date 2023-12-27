chrome.commands.onCommand.addListener(function(command) {
    if (command === "paste") {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            const scriptToExec = `
                var textToPaste = \`## What type of PR is this? (check all applicable)
- [ ] 📜 Feature
- [ ] 🐛 Bug Fix
- [ ] ⚡ Hot-fix
- [ ] 🔥 Optimization
- [ ] 🖨️ Documentation Update
- [ ] 💯 Testing
- [ ] ↩️ Revert

## Summary

### What was the reason?
-

### What is the solution?
-

## Added/updated tests?

- [ ] Yes
- [ ] No, because they aren't needed

### [optional] Screenshots or Recordings showing changes
\`;
                document.activeElement.value += textToPaste;
            `;
            chrome.tabs.executeScript(tabs[0].id, { code: scriptToExec });
        });
    }
});
