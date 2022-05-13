### playcanvas-change-scene-async

Plug-in for async scene transitions in PlayCanvas.
Drag and drop `change-scene-async-plugin.js` into the editor.

### Usage

Press the button. Scene transitions

```javascript
class Button extends pc.ScriptType {
  initialize() {
    this.entity.button.on("click", this.onPress, this);
  }

  async onPress() {
    await pc.changeSceneAsync("Scene2");
  }
}
pc.registerScript(Button);
```
