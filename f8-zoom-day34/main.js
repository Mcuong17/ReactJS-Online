// DOM thật (Real DOM)
// Cách tạo ra  element document.createElement()
// Props: id, value, title...

//DOM ảo (Vitrual DOM)
//Tạo ra một React element React.createElement()
// React: tạo h1 element
// Khi children có 1 phần tử con thì nó là chính phần tử đó
// Khi đưa element vào một mảng, thì bắt buộc phải có một props là key
// const h1 = React.createElement(
//     'h1',
//     {
//         id:'1',
//         title:'Hello',
//         className:'Small Heading'
//     },
//     [
//         React.createElement('i',{key:'1'},"Xin"),
//         React.createElement('span',{key:'2'},"Chào")
//     ]
// )
// console.log(h1);

// React DOM: Render h1 tạo ra UI

// const div = React.createElement(
//   React.Fragment,
//   null,  
//   React.createElement(
//     "h1",
//     {},
//     "Todo List",
//   ),
//   React.createElement(
//       "ul",
//       {
//         id: "tasks-list",
//       },
//       React.createElement(
//         "li",
//         { key: "1", className: "task-item active" },
//         "Task 1"
//       ),
//       React.createElement(
//         "li",
//         { key: "2", className: "task-item completed" },
//         "Task 2"
//       ),
//       React.createElement(
//         "li",
//         { key: "3", className: "task-item active" },
//         "Task 3"
//       )
//     )
// );

// console.log(div)
// const root = ReactDOM.createRoot(document.querySelector("#root"));
// root.render(div);
