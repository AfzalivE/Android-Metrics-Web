import './style.css'
import viteLogo from '/vite.svg'
import DataTable from 'datatables.net-searchbuilder'
import 'datatables.net-datetime'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>

    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>

    <table id="example">
  </div>
`
const one = await fetch('05-10-2023-23-37-15/tv_release-module.json')
const two = await fetch('06-10-2023-05-22-18/tv_release-module.json')
const oneJson = await one.json();
const twoJson = await two.json();
const merged = {
  data: [
    oneJson,
    twoJson
  ]
}
console.log(oneJson);
console.log(twoJson);

const columns = Object.keys(oneJson).map((title) => {
  return { title: title }
})
console.log(columns)

new DataTable('#example', {
  dom: 'Qfrtip',
  columns: columns,
  data: [
    Object.values(oneJson), Object.values(twoJson)
  ]
});
