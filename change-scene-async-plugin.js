pc.extend(
  pc,
  (function () {
    const loadSceneAsync = async (sceneName) => {
      const scene = pc.app.scenes.find(sceneName);
      return new Promise((resolve, reject) => {
        pc.app.scenes.loadSceneHierarchy(scene.url, (err, parent) => {
          if (!err) {
            resolve(parent);
          } else {
            reject();
          }
        });
      });
    };

    const changeSceneAsync = async (sceneName) => {
      pc.app.scene.root.destroy();
      const root = await loadSceneAsync(sceneName);
      pc.app.scene.root = root;
    };

    return {
      loadSceneAsync,
      changeSceneAsync,
    };
  })()
);
