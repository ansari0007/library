function Book(name,author,type){
	this.name=name;
	this.author=author;
	this.type=type;
	
}

function Display(){
	
	
	
}
Display.prototype.add=function(book){
	console.log('done');
	tableBody=document.getElementById('tableBody');
	let uiString=`<tr>
					<td>${book.name}</td>
					<td>${book.author}</td>
					<td>${book.type}</td>
                  </tr>`;
	tableBody.innerHTML += uiString;
}
Display.prototype.clear=function(){
	let libraryForm=document.getElementById('libraryForm');
	libraryForm.reset()
}
Display.prototype.validate=function(book){
	if (book.name.length<2||book.author.length<2){
		return false;
	}
	else{
		return true;
	}
}
Display.prototype.show=function(type,displayMessage){
	let hello=document.getElementById('hello');
	hello.innerHTML=`<div class="alert alert-${type} alert-dismissible fade show" role="alert">
  <strong>message:</strong>${displayMessage}
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>`;
	
	
	setTimeout(function(){
		hello.innerHTML=``;
	},2000); 
	
}
let libraryForm=document.getElementById('libraryForm');

libraryForm=addEventListener('submit',libraryFormSubmit);

function libraryFormSubmit(e){
	console.log('form has been sumitted');
	e.preventDefault();
	let name=document.getElementById('name').value;
	let author=document.getElementById('author').value;
	let type;
	let fiction = document.getElementById('fiction');
	let computer = document.getElementById('computer');
	let cooking = document.getElementById('cooking');
	
	if(fiction.checked){
		type=fiction.value;
	}
	else if(computer.checked){
		type=computer.value;
	}
	else if(cooking.checked){
		type=cooking.value;
	}
		
	
	let book=new Book(name,author,type);
	console.log(book);
	let display = new Display();
	if (display.validate(book)){
			display.add(book);
			display.clear();
			display.show('Success','Your book has been add.');
	}
	else{
		display.show('danger','Sorry you can add this book.');
	}
	
}