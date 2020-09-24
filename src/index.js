async function getComponent() {
  const div = document.createElement('div');
  div.innerHTML = 'Hello';
  div.appendChild(getBtn());

  return div;
}

const lodashMessage = async (div) => {
  const { default: _ } = await import(/* webpackChunkName: "lodash" */ 'lodash');
  console.log(_.join(['Hello', 'webpack'], ' '));
};

function getBtn() {
  const btn = document.createElement('button');
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = lodashMessage;
  return btn;
}

getComponent().then(component => {
  document.body.appendChild(component);
});