import React, { Component } from "react";
import "./Search.scss";
export default class Search extends Component {
  render() {
    return (
      <div id="search">
        <form>
          <input type="text" placeholder="Search" />
          <button className="search_button" type="submit">
            <img
              className="find"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAABJlBMVEVHcEz///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+w8PQxAAAAYXRSTlMAQ7S4Afr5swYI+/PszLdARQcMPj2AKFt/Qesnssu2oT9j7VwjZorN1xhgIokXoogmafReh8poC9mgJMlsldi5GULICQ72E8LHqA0x1jaD6tUR/oJT+BU53l3jYqWq9/zD0BA8pgAAAcVJREFUSMfVlmdfwjAQxtvSUqZgWbIEZDkAFygOwL333trv/yW8qwrYXAp9p/cuz5N/k7tc8qsg/JPYyNXKPkVJ+DPPU0MBAeld74ZHDQ0EVh26KcYL1sTigs6EN29FXH9NOqmLyeXlqDg7+TWO8IkzY8JavKfcf1gzi+g6i3K/Ji85UY1xMsc8fGGzHJrAfGZIBGvlDLN6VgFDIs8DN1CknHl0iG8JEuhbMoXIDbBSRJd4QM/SWcaxD6qMnAP5glfLNpjTjFoDtc5DKmCuMGoZVJGHBMFMM6oP1DkekgTznFHxkDUeooF5SyJHPGQHG8D+xh4Y1T8o/QNGzYA6y0NKYLbIo5zkIU0wbxh1ChsmQBMi9vgeq6t4Iem2xDwzhBHCFl+ikHV0jilnHAyFeLbieMVeyB0XvGBNMP0fwIucuKOzzOMGlPnfz8U6rqHvuzi1jBgvUHqzr1b+nzfTbcno7UowqmnRYKnZezNTvHViXp0X6iiHmZFMM69eO4MYIZzy9IC3w1PBPfI9kLiMUJ1eSSecu0+N1uMljodhzOFSv5kRt33G8YeZzvbQTLduecHuOmN2fiEMxhZhMDYJyCf213+mPgGDR6V2DkiL2QAAAABJRU5ErkJggg=="
              alt=""
            />
          </button>
        </form>
      </div>
    );
  }
}
