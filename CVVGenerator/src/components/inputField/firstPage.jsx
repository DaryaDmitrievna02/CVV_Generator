

function FirstPage({Input, About}){


return(<>

<div className="flex flex-col gap-5 text-left">
     <div className="flex flex-col">
    <label >Photo</label>
    <input type="file"  onChange={e=>Input({...About, photo: URL.createObjectURL(e.target.files[0])})}></input>
    </div>
    <div className="flex flex-col">
    <label >Name</label>
    <input required type="text" value={About.firstName} onChange={e=>Input({...About, firstName: e.target.value})}></input>
    </div>
    <div className="flex flex-col">
    <label >Last Name</label>
    <input required type="text" value={About.lastName} onChange={e=>Input({...About, lastName: e.target.value})}></input>
    </div>
    <div className="flex flex-col">
    <label >tel</label>
    <input required type="text" value={About.contacts.tel} onChange={e=>Input({...About,  contacts: { tel:e.target.value, mail:About.contacts.mail}})  }></input>
    </div>
    <div className="flex flex-col">
    <label >mail</label>
    <input required type="text" value={About.contacts.mail} onChange={e=>Input({...About,  contacts: { mail:e.target.value, tel:About.contacts.tel}})}></input>
    </div>

    


</div>

</>)

}


export default FirstPage;