# Tailwind-CSS
Namste React Episode 10


CSS/SCSS/Styled Component/Material UI/ Chakra UI/ Bootstrap/ Ant Design

**Tailwind CSS**
>To install tailwind css we have to go framework guide and choose parcel/ or create react app whats ever you are working into
>in the installation package there are two one is tailwing and another one is Post CSS

What is Post CSS
> it is tool that transforms your styles using JavaScript plugins.

How to install 

npm install -D tailwindcss postcss
npx tailwindcss init

** After This you have to create configuration for Post CSS as well
> then create a file with extension .postcssrc in root
> after creating this file you have to write this 
   
    {
  "plugins": {
    "tailwindcss": {}
  }
}  

>By writing this we are telling postcssrc that we are using tailwind 
>so postcssrc will,
>your parcel need to use postcssrc to read tailwind
> so after this we need to make modification in the tailwind.config.js file 
  
   content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],

> content need to replaced by above
> this content attribute takes the array 
> list of all the files where I can use tailwindcss
> i.e any file which have these above extension where tailwind can be used 
 
**How to give specfic size in px
> you have to write like 
   w-[200px]
>width: 200px   


> for the responsiveness we can use sm xl for the devices 
 > sm:bg-yellow-50 lg:bg-red-200
>this will work as a condition 

