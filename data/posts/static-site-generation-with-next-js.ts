export default {
    "urlTitle": "static-site-generation-with-next-js",
    "title": "Static Site Generation with Next.js",
    "metaDescription": "Generating static sites (SSG) with Next.js and React.js is now possbile. This tutorial shows how you can achieve it.",
    "metaKeywords": "next.js react static site generation javascript tutorial",
    "previewDescription": "Generating static sites (SSG) with Next.js and React.js is now possbile. This tutorial shows how you can achieve it.",
    "date": "11.03.2020",
    "elements": [
        {
            "type": "paragraph",
            "data": {
                "text": `When it comes to Server Side Rendering with React, 
                two frameworks come to mind: next.js and Gatsby. So far the consensus was: 
                if you want your page to be serverside rendered (SSR) you go for Next.js
                and if you want a Static Site Generation (SSG), you go for Gatsby. 
                However, the guys at Zeit, who develop next.js, have since stepped up 
                their game and are also trying to enable SSG with next.js. 
                In this little tutorial, I will show you, how you can use the new pure 
                SSG feature of Next.js, to generate static sites with dynamic data.`
            }
        },
        {
            "type": "subTitle",
            "data": {
                "title": "The Functions You Need"
            }
        },
        {
            "type": "paragraph",
            "data": {
                "text": `Creating static sites from data with next.js is really simple. You only need 
                two functions to do it: unstable_getStaticProps & unstable_getStaticPaths. 
                Note: The unstable_ prefix will be removed, once the feature is merged into 
                stable release, I will update the tutorial once this happend. Now before we implement them, let’s have a quick look 
                at what these functions do.`
            }
        },
        {
            "type": "code",
            "data": {
                "code": "unstable_getStaticPaths",
                "langugage": "language-javascript"
            }
        },
        {
            "type": "paragraph",
            "data": {
                "text": `This function creates a map of the paths that you will create. `
            }
        },
        {
            "type": "code",
            "data": {
                "code": "unstable_getStaticProps",
                "langugage": "language-javascript"
            }
        },
        {
            "type": "paragraph",
            "data": {
                "text": `This function returns the object which gets passed into each Screen. The function recieves the name of the file that will be generated.
                With this name you can determine which kind of data you want to pass into the screen.`
            }
        },

        {
            "type": "subTitle",
            "data": {
                "title": "Implementing static site generation"
            }
        },
        {
            "type": "paragraph",
            "data": {
                "text": `Now that we know the functions we are gonna use, let’s have a look at how 
                to actually pull off static site generation with them, step by step.`
            }
        },
        {
            "type": "subTitle",
            "data": {
                "title": "Step 1 - Setting Up A New Next.js Project"
            }
        },
        {
            "type": "paragraph",
            "data": {
                "text": `If you haven’t already, create a basic next.js project. 
                This has already been documented much better than I could ever do it. 
                So head over to the offical documentation page of next.js and check 
                it out https://nextjs.org/learn/basics/getting-started`
            }
        },
        {
            "type": "subTitle",
            "data": {
                "title": "Step 2 - Create A Dynamic File"
            }
        },
        {
            "type": "paragraph",
            "data": {
                "text": `Now that you have set up a basic next.js project, 
                go to the pages folder, and create a new folder inside pages and name it p.`
            }
        },
        {
            "type": "image",
            "data": {
                "url": "/static/images/ssgNext/folderstructure.png",
                "alt": "next js ssg folder structure"
            }
        },
        {
            "type": "subTitle",
            "data": {
                "title": "Step 3 - Creating The Page Component"
            }
        },
        {
            "type": "paragraph",
            "data": {
                "text": `Inside the p folder, create a file with the brackets notation. 
                I’ll call it [urlTitle].jsx. Inside this file I will create a basic page component.
                To keep this super simple I will create a plain react component with a dynamic headline. 
                You can of course fill this with any dynamic data you like.`
            }
        },
        {
            "type": "gist",
            "data": {
                "url": "b4f10e8e6d680c27d9ec87e872f81497"
            }
        },
        {
            "type": "subTitle",
            "data": {
                "title": "Step 4 - Adding The Static Functions"
            }
        },
        {
            "type": "paragraph",
            "data": {
                "text": `Now, this is a standard functional react component, which would 
                not really do much at this point. Therefore we need to add the two 
                functions we discussed earlier. You don’t need to import the functions, 
                just add them below the Component, like so:`
            }
        },
        {
            "type": "gist",
            "data": {
                "url": "de4b3ab36d684c7a9623c2995181c5d4"
            }
        },
        {
            "type": "subTitle",
            "data": {
                "title": "Step 5 - Adding Dynamic Data"
            }
        },
        {
            "type": "paragraph",
            "data": {
                "text": `Now, let’s start filling them with some Code. First the unstable_getStaticPaths. 
                This function basically needs to return all the paths for the files that will be created 
                with this component. In order to make this dynamic, we need to create the data that will 
                be passed into each page. Picture every page as a JSON object. The content of this JSON 
                Object will be used to hydrate each site with data. We do this simply by adding an array of 
                JSON Objects to our component like so:`
            }
        },
        {
            "type": "gist",
            "data": {
                "url": "69fb391e4c9b15947e425a6d72038c61"
            }
        },
        {
            "type": "paragraph",
            "data": {
                "text": `You can of course also load this data dynamically from somewhere else, but we are gonna
                keep things simple here. With this,  you want to make sure, one of the keys of your json 
                Object has the same name as you gave the file earlier. So in my case, this is "urlTitle". The value of this key 
                will also be the name of the generated file. So you probably want to make sure, that it is SEO 
                friendly. For this example, I’ll just give it a kind of random name.`
            }
        },
        {
            "type": "paragraph",
            "data": {
                "text": `Now, let’s use this data inside of our unstable_getStaticPaths function like so: `
            }
        },
        {
            "type": "gist",
            "data": {
                "url": "cb931203c1cfca6ad1fbc169308cfc37"
            }
        },
        {
            "type": "paragraph",
            "data": {
                "text": `Essentially what we are doing here, is mapping over the Array we just created, 
                and bringing it into the format that next.js expects.This means, wrapping our object inside 
                another object, and reference it with the key “params”. If you want to, you could bring your 
                data in this format right from the start, however since this is next specific and not 
                specific to my data I rather do it in here.`
            }
        },
        {
            "type": "paragraph",
            "data": {
                "text": `Next up we want to add some Code to the unstable_getStaticProps function. 
                This function passes in the data we just created for our page component. It’s important
                to understand, that so far, the params prop that gets passed into this function, does only 
                contain the "urlTitle" prop, while your title key gets ignored.This means you should now 
                try to get the corresponding data from your array, by finding it via the unique URL title. 
                We can to it like so: `
            }
        },
        {
            "type": "gist",
            "data": {
                "url": "26371e9e068e5730b16b2615c1f95be4"
            }
        },
        {
            "type": "paragraph",
            "data": {
                "text": `Aaaand that’s it! Well almost.We still need to add one small command to our package.json
                to trigger the export. Go to your package.json and insert this line:`
            }
        },
        {
            "type": "gist",
            "data": {
                "url": "b43eb1df9220f8a38daa35b5c970d27c"
            }
        },
        {
            "type": "paragraph",
            "data": {
                "text": `Now you can go to the project root folder, and execute the following commands 
                ( Make sure you have the latest node version, otherwise this might throw errors) :`
            }
        },
        {
            "type": "code",
            "data": {
                "code": `npm install`,
                "langugage": "language-javascript"
            }
        },
        {
            "type": "code",
            "data": {
                "code": `npm run build`,
                "langugage": "language-javascript"
            }
        },
        {
            "type": "code",
            "data": {
                "code": `npm run export`,
                "langugage": "language-javascript"
            }
        },
        {
            "type": "paragraph",
            "data": {
                "text": `And voila! You have yourself some static generated files. 
                You can find those files inside the "out" folder, that next.js generated for you. 
                Lets have a look at the pages we just created. For that you can install serve: `
            }
        },
        {
            "type": "code",
            "data": {
                "code": `npm i - g serve`,
                "langugage": "language-javascript"
            }
        },
        {
            "type": "paragraph",
            "data": {
                "text": `In the terminal go to you “out” folder, and run: `
            }
        },
        {
            "type": "code",
            "data": {
                "code": `serve - p 3000`,
                "langugage": "language-javascript"
            }
        },
        {
            "type": "paragraph",
            "data": {
                "text": `After that, you can find your site on :
    `
            }
        },
        {
            "type": "code",
            "data": {
                "code": `http://localhost:3000/p/this-is-my-first-page`,
                "langugage": "language-javascript"
            }
        },
        {
            "type": "paragraph",
            "data": {
                "text": `Congrats, for making it till here.Hope this helped you!`
            }
        },
        {
            "type": "paragraph",
            "data": {
                "text": `Sincerly, Firemind!`
            }
        },
    ]
}









