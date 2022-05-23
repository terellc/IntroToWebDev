function drawTriangle(size) {
   var width = 0;
   var w;
   var h;
   var line; 
   
   for(h = 0; h < size; h++) {
        line = "*";
        for (w = 0; w < width; w++) {
          line += "*";
        }
        console.log(line);
        width++;
   }
}