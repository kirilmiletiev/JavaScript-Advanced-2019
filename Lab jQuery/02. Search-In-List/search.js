function search() {

   let list = $('li').toArray();
   let searchText = document.getElementById('searchText');
   let counter = 0;

   for (let li of list) {
      if (li.textContent.includes(searchText.value)) {
         li.style = "font-weight: bold;";
        counter++;
      }
   }
    document.getElementById('result').textContent = counter.toString();

}