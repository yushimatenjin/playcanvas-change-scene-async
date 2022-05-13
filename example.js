class Button extends pc.ScriptType {
  initialize() {
    this.entity.button.on("click", this.onPress, this);
  }

  async onPress() {
    await pc.changeSceneAsync("Scene2");
  }
}
pc.registerScript(Button);
