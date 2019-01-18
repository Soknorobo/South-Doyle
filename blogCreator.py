#! bin/bash python3
from __future__ import print_function
import os
try:
    from tkinter import *
except:
    print("tkinter not found. \nSearching for Tkinter")
    from Tkinter import *
    print("Found 'Tkinter'")

window = Tk()
window.title("Blogs")
window.geometry('900x500')

imgAdd_lbl = Label(window, text="Image Name :")
imgAdd_lbl.grid(column=0, row=0)
imgAdd = Entry(window, width=80, background="gray")
imgAdd.grid(column=1, row=0)


title_lbl = Label(window, text="Title :")
title_lbl.grid(column=0, row=1)
title = Entry(window, width=80, background="gray")
title.grid(column=1, row=1)


blog_lbl = Label(window, text="Blog :")
blog_lbl.grid(column=0, row=2)
blog = Text(window, heigh=20, width=103, background="gray")
blog.grid(column=1, row=3)


date_lbl = Label(window, text="Date :")
date_lbl.grid(column=0, row=4)
date = Entry(window, width=80, background="gray")
date.grid(column=1, row=4)


author_lbl = Label(window, text="Author :")
author_lbl.grid(column=0, row=5)
author = Entry(window, width=80, background="gray")
author.grid(column=1, row=5)


def getinfo():
    global imgAdd, title, blog, date, author

    imgAdd = imgAdd.get()
    title = title.get()
    blog = blog.get("1.0", END)
    date = date.get()
    author = author.get()
    window.destroy()


btn = Button(window, text="Done", command=getinfo,
             bg="orange", fg="red")
btn.grid(column=0, row=9)

imgAdd.focus()
window.mainloop()

filename = os.path.dirname(os.path.abspath(__file__))


with open(os.path.join(filename,"blog.html"), "r") as f:
    fileContents = f.readlines()

with open(os.path.join(filename, "blog.html"), "w+") as f:
    lines = f.readlines()
    for line in fileContents:
        f.writelines(line)
        if "<!-- ##BLOG## -->\n" in line:
            f.writelines('''<!-- New Blog Post --> \n<div class="card mb-4">\n<img class="card-img-top" src="./img/blogs/{}" alt="Card image cap">\n<div class="card-body">\n<h2 class="card-title">{}</h2>\n<p class="card-text">{}</p>\n<!-- <a href="#" class="btn btn-primary">Read More &rarr;</a> -->\n</div>\n<div class="card-footer text-muted">\nPosted on {} by <a href="javascript:void()">{}</a>\n</div>\n</div><!-- ##END## -->'''.format(imgAdd, title, blog, date, author))

print("\n"*2)

print()
