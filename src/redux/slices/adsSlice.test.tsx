import adsReducer, {
  createAd,
  deleteAd,
  editAd,
  stateInterface,
} from "./adsSlice";

describe("ads reducer", () => {
  const initialState: stateInterface = {
    status: "idle",
    error: null,
    adsList: [
      {
        id: 1,
        image: "",
        video: "http://www.exit109.com/~dnn/clips/RW20seconds_1.mp4",
        from_time: "12/05/2021 06:25:00 PM",
        to_time: "12/05/2021 06:27:00 PM",
      },
    ],
  };
  it("should handle initial state", () => {
    expect(adsReducer(undefined, { type: "unknown" })).toEqual({
      status: "idle",
      error: null,
      adsList: [],
    });
  });
  it("should add a new ad", () => {
    const formData = {
      id: new Date().getTime(),
      type: "video",
      link: "https://www.youtube.com/watch?v=EyeczjAz5cs&list=RDMM&start_radio=1",
      from_time: "1/15/2022",
      to_time: "1/20/2022",
    };
    expect(adsReducer(initialState, createAd(formData))).toEqual({
      status: "idle",
      error: null,
      adsList: [
        {
          id: 1,
          image: "",
          video: "http://www.exit109.com/~dnn/clips/RW20seconds_1.mp4",
          from_time: "12/05/2021 06:25:00 PM",
          to_time: "12/05/2021 06:27:00 PM",
        },
        {
          id: formData.id,
          image: "",
          video:
            "https://www.youtube.com/watch?v=EyeczjAz5cs&list=RDMM&start_radio=1",
          from_time: new Date(formData.from_time).toLocaleString(),
          to_time: new Date(formData.to_time).toLocaleString(),
        },
      ],
    });
  });
  it("should remove and ad", () => {
    expect(adsReducer(initialState, deleteAd(1))).toEqual({
      status: "idle",
      error: null,
      adsList: [],
    });
  });
  it("should edit and ad", () => {
    const formData = {
      id: 1,
      type: "image",
      link: "https://www.industrialempathy.com/img/remote/ZiClJf-640w.avif",
      from_time: "12/05/2021",
      to_time: "1/05/2022",
    };

    expect(adsReducer(initialState, editAd(formData))).toEqual({
      status: "idle",
      error: null,
      adsList: [
        {
          id: 1,
          image:
            "https://www.industrialempathy.com/img/remote/ZiClJf-640w.avif",
          video: "",
          from_time: new Date("12/05/2021").toLocaleString(),
          to_time: new Date("1/05/2022").toLocaleString(),
        },
      ],
    });
  });
});
