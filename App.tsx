import * as React from 'react';
import { useState } from "react";
import './style.css';
import Content from './text.js';

export default function App() {
  const values = [100, 200, 300]
  const gifts = ["Iphone 11 pro max", "Glaxy Ultra S25", "Iphone 14 pro max 1T", "Chúc may mắn vào nhìu lần sau ^^!"]
  const [couster, setCouster] = useState(1)
  const [couster2, setCouster2] = useState(1)
  const [info, setInfo] = useState({
    name: "Truong handsome",
    age: 22,
    height: 170 + 'cm',
  })
  const [couster3, setCouster3] = useState(() => {
    return (
      values.reduce((value, cur) => value + cur)
    )
  })
  const [gift, setGift] = useState('')
  const [data, setData] = useState()
  const [age, setAge] = useState()
  const cousers = [
    {
      id: 1,
      name: "Html,css"
    },
    {
      id: 2,
      name: "Javascript"
    },
    {
      id: 3,
      name: "ReactJs"
    }
  ]
  //bai7,8
  const [checked, setChecked] = useState()
  const [checkedBox, setCheckedBox] = useState([])
  //bai 9
  const [job, setJob] = useState('')
  const [jobs, setJobs] = useState(() => {
    const defaultJobStorage = JSON.parse(localStorage.getItem('jobs'))
    return  defaultJobStorage ?? []
  })
  //bai 10
  const [show, setShow] = useState(false)

  // Xử lý tăng 1 giá trị
  const handleCouster = () => {
    setCouster(couster + 1)
  }
  // Xử lý tăng 1 lần 3 giá trị
  const handleCouster2 = () => {
    setCouster2(preveState => preveState + 1)
    setCouster2(preveState => preveState + 1)
    setCouster2(preveState => preveState + 1)

  }
  // Xửt lý tăng 1 giá trị cho tổng
  const handleCouster3 = () => {
    setCouster3(couster3 => couster3 + 1)
  }
  // Xử lý thêm một giá trị cho Object
  const changeInfo = () => {
    setInfo({
      ...info,
      favorite: 'coding'
    })
  }
  // Xử lý trả về giá trị ban đầu của Object
  const unChangeInfo = () => {
    setInfo({
      name: "Truong handsome",
      age: 22,
      height: 170 + 'cm',
    })
  }
  // Xử lý random phần thưởng
  const handleGiftRanDom = () => {
    const index = Math.floor(Math.random() * gifts.length)
    setGift(gifts[index])
    return index
  }
  // Xu ly two way biding voi input
  const postDataForm = () => {
    console.log('Input', {
      data,
      age
    })
    console.log('Radio', {
      id: checked
    })
    console.log('checkbox', {
      id: checkedBox
    })
  }
  // Xu ly gui two way biding checkedbox
  const handleCheckedBox = (id) => {
    setCheckedBox(prev => {
      let isChecked = checkedBox.includes(id) // kiểm tra checkedBox hiện tại và id trả về true or false
      if (isChecked) {
        return checkedBox.filter(item => item !== id) // kiểm tra  lặp qua mảng checkedBox và lấy các kết quả thỏa đk
      }
      else {
        return [...prev, id] // nếu isChecked false thì sẽ dô đây và nhận một mảng có  các kq trước và id hiện tại
      }
    })
  }
  // Xu ly todolist va add vao localStorage
  const handleSubmit = (job) => {
    setJobs(prev => {
        const coverdTypeJobs = JSON.stringify([...prev, job])
        localStorage.setItem('jobs',coverdTypeJobs)
        return [...prev, job]
    })
    setJob('')
  }

  return (
    <div className="wrapper">
      <div className="bt1 bt">
        <h1>Bài tập tăng lên 1 giá trị ko dùng callback</h1>
        <h2>{couster}</h2>
        <button onClick={handleCouster}>Click me!</button>
      </div>
      <div className="bt2 bt">
        <h1>Bài tập tăng lên 3 giá trị và dùng callback</h1>
        <h2>{couster2}</h2>
        <button onClick={handleCouster2}>Click me!</button>
      </div>
      <div className="bt3 bt">
        <h1>Bài tập cho mảng giá trị khi click sẽ cộng thêm 1 đơn vị vào tổng giá trị của mảng đã cho</h1>
        <h2>{couster3}</h2>
        <button onClick={handleCouster3}>Click me!</button>
      </div>
      <div className="bt4 bt">
        <h1>Bài tập cho mảng giá trị ngẫu nhiên thêm một giá trị vào mảng</h1>
        <h3>{JSON.stringify(info)}</h3>
        <ul>
          <li>{info.name}</li>
          <li>{info.age}</li>
          <li>{info.height}</li>
          {
            info.favorite && <li>{info.favorite} </li>
          }
        </ul>
        <button onClick={changeInfo}>Click me!</button>
        <button onClick={unChangeInfo}>UnClick me!</button>
      </div>
      <div className="bt5 bt">
        <h1>Làm 1 minigame lấy thưởng random</h1>
        <h2>{gift || 'Click đi mới có thưởng'}</h2>
        <button onClick={handleGiftRanDom}>Click đây đi sẽ có thưởng nè!</button>
      </div>
      <div className="bt6 bt">
        <h1>Bài tập two way biding với input</h1>
        <label>Enter your name</label><br></br>
        <input onChange={e => setData(e.target.value)} value={data}></input><br></br>
        <label>Enter your age</label><br></br>
        <input onChange={e => setAge(e.target.value)} value={age}></input><br></br>
        <button onClick={postDataForm}>Submit</button>
      </div>
      <div className="bt7 bt">
        <h1>Bài tập two way biding với Radio</h1>
        <label>Chọn đi</label><br></br>
        {
          cousers.map(item => (
            <div key={item.id}>
              <input
                type="radio"
                checked={checked === item.id}
                onChange={() => setChecked(item.id)}
              >
              </input>{item.name}
            </div>
          ))
        }
        <button onClick={postDataForm}>Submit</button>
      </div>
      <div className="bt8 bt">
        <h1>Bài tập two way biding với Radio</h1>
        <label>Chọn đi</label><br></br>
        {
          cousers.map(item => (
            <div key={item.id}>
              <input
                type="checkbox"
                checked={checkedBox.includes(item.id)}
                onChange={() => handleCheckedBox(item.id)}
              >
              </input>{item.name}
            </div>
          ))
        }
        <button onClick={postDataForm}>Submit</button>
      </div>
      <div className="bt9 bt">
        <h1>Bài tập todolist lưu lại trong localStores</h1>
        <label>Enter your list</label><br></br>
        <input type="text" value={job}  onChange={e => setJob(e.target.value)} />
        <ul>
          {
            jobs.map((item, index) => (
              <li key={index}>
                {item}
              </li>
            ))
          }
        </ul>
        <button onClick={() => handleSubmit(job)}>Add</button>
      </div>
      <div className="bt10 bt">
          <h1>
              Bai tap an hien vi du cho Mounted va UnMounted
          </h1>
          {show && <Content/>}
          <button onClick={() => setShow(!show)}>Click me!</button>
       
      </div>
    </div>
  );
}
