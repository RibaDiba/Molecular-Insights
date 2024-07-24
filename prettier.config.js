module.exports = {
     tabWidth: 4,
     plugins: ["prettier-plugin-svelte"],
     overrides: [
       {
         files: "*.svelte",
         options: {
           parser: "svelte"
         }
       }
     ]
   };
   