export function typewriter_header(node, { speed = 50, speed_bs = 40, delay_time = 7000 } = {}) {
   const base_text = 'Hi, I\'m ';
   const text = [ // different usernames
      "Brian Hill",
      "TrojanPinata",
      "moerue"
   ];

   let currentIndex = 0;
   let charIndex = 0;
   let base_print = ''; // what has been printed from base text

   function delay(ms) { 
      return new Promise((resolve) => setTimeout(resolve, ms));
   }

   async function loop() {

      // print the base text once before cycling names
      for (let i = 0; i <= base_text.length; i++) {
         base_print = base_text.slice(0, i);
         node.textContent = base_print;
         await delay(speed);
      }

      while (true) {
         const current = text[currentIndex];

         // type characters
         while (charIndex <= current.length) {
            node.textContent = base_print + current.slice(0, charIndex);
            charIndex++;
            await delay(speed);
         }

         // wait
         await delay(delay_time);

         // backspace
         while (charIndex > 0) {
            charIndex--;
            node.textContent = base_print+ current.slice(0, charIndex);
            await delay(speed_bs); // fast backspace
         }

         // change text to print
         currentIndex = (currentIndex + 1) % text.length;
      }
   }

   loop();

   return {
      destroy() {}
   };
}