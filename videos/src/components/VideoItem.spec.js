import React from "react";
import { shallow } from "enzyme";
import VideoItem from "./VideoItem";

const myVideo = {
  snippet: {
    thumbnails: {
      default: {
        url: ""
      }
    },
    title: "My video"
  }
};

describe("VideoIem", () => {
  it("renders the title correctly", () => {
    const wrapper = shallow(
      <VideoItem video={myVideo} onVideoSelect={jest.fn} />
    );
    expect(wrapper.html()).toMatch(myVideo.snippet.title);
  });

  it('gracefully handles unexpected inputs', () => {
    const wrapper = shallow(
      <VideoItem /> // Do not add props
    );
    expect(wrapper.html()).toMatch('Unexpected input');
  })
});
