import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../styles/Home.css';
import UpdateAnnouncement from '../components/UpdateAnnouncement';
import announcements from '../data/announcements';

const Home = () => {
  const [roomCount, setRoomCount] = useState(0);

  useEffect(() => {
    const serverUrl = import.meta.env.VITE_SERVER_URL;
    fetch(`${serverUrl}/room-count`)
      .then(response => response.json())
      .then(data => setRoomCount(data.count))
      .catch(error => console.error('Error fetching room count:', error));
  }, []);

  return (
    <div className="home-container">
      <div className="game-modes">
        <Link to="/singleplayer" className="mode-button">
          <h2>单人</h2>
        </Link>
        {/* <Link to="/multiplayer" className="mode-button">
          <h2>多人</h2>
          <small>当前房间数: {roomCount}/259</small>
        </Link> */}
      </div>
      
      {/* <UpdateAnnouncement 
        announcements={announcements} 
        defaultExpanded={false}
        initialVisibleCount={1}
      /> */}
      
      <div className="home-footer">
        <p>
          一个猜动漫角色的游戏,
          建议使用桌面端浏览器游玩。
          <br/>
          来源<a href="https://anime-character-guessr.netlify.app/">二刺猿笑传之猜猜呗</a>,
          数据来源<a href="https://bgm.tv/">Bangumi</a>。<br />
          暂不开放多人玩法。
        </p>
      </div>
    </div>
  );
};

export default Home; 
