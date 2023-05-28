import React from 'react'
import { Link } from 'react-router-dom'

const NewCard = ({id,
    title,
    description,
    banner,
    createdAt,
    updatedAt,
    author,
    avatar,
    content1,
    content2,
    gallery,
    tags} ) => {

     //Get all the blog details and store them in a variable
    const new_item = {
        id,
        title,
        description,
        banner,
        createdAt,
        updatedAt,
        author,
        avatar,
        content1,
        content2,
        gallery,
        tags
    };

    
    //image(image title) click handler
    const slugify = (string) => {
        return string
            .toString()
            .toLowerCase()
            .replace(/\s+/g, '-') // Replace spaces with -
            .replace(/[^\w-]+/g, '') // Remove all non-word chars except -
            .replace(/--+/g, '-') // Replace multiple - with single -
            .replace(/^-+/, '') // Trim - from start of text
            .replace(/-+$/, ''); // Trim - from end of text
    };


  return (
    
    <div class="flex rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border  border-gray-500 bg-gray-900">
        <div class="w-full md:w-1/3  grid place-items-center">
            <Link 
                to= {`/news/${slugify(title)}`}  
                state = {new_item}
            > 
                <img src={banner} alt="tailwind logo" class="rounded-sm" />
            </Link>
        </div>
        <div class="w-full md:w-2/3 flex flex-col space-y-2 p-3">
            <h3 class="font-black text-gray-200 sm:text-sm md:text-md lg:text-xl">{title}</h3>
            <p class="md:text-sm lg:text-md text-gray-300 text-base">
                

                {
                    description &&
                    description.length > 250?description.substring(0, 250) + '...':description
                }
            </p>
            <div class="flex flex-row justify-between items-center">
                <div class="flex flex-row justify-end items-center">
                    <p class="text-gray-200 text-xs md:text-sm lg:text-md">{createdAt}</p>
                </div>
                <div class="flex flex-row justify-end items-center">
                    <Link 
                        to= {`/news/${slugify(title)}`}  
                        state = {new_item}
                    > 
                        <button class="bg-[#043334] hover:bg-[#0a4849] text-gray-200 font-bold py-2 px-4 rounded">
                            Read More
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    </div>

  )
}

export default NewCard