//your code here

let priceCells=document.querySelectorAll('[data-ns-test="prices"]');
let total=0;
priceCells.forEach((cell)=>{
	total+=Number(cell.textContent)
})
let table=document.getElementById("grocery");
let row=document.createElement('tr');
let td=document.createElement('td');
td.setAttribute("data-ns-test", "grandTotal");
td.colSpan=2;
td.textContent = total;
row.appendChild(td);
table.appendChild(row);

										
										 