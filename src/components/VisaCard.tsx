const VisaCard = () => {
  return (
    <div className="w-[95%] mx-auto">
      {/* From Uiverse.io by Praashoo7 */}
      <div className="flip-card ">
        <div className="flip-card-inner">
          <div className="flip-card-front pt-3 w-full">
            <div className="flex justify-between w-full px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="29"
                height="25"
                viewBox="0 0 29 25"
                fill="none"
                x={0}
                y={0}
                // className="chip"
                className=""
              >
                <path
                  d="M14.5002 15.5C14.5002 17.5613 14.4259 19.2175 12.5 20.5"
                  stroke="#4B5B98"
                />
                <path
                  d="M14.5742 9.28271C14.5147 5.83964 14.4434 4.01248 16 3.5"
                  stroke="#4B5B98"
                />
                <path
                  d="M0.5 4C0.5 2.067 2.067 0.5 4 0.5H25C26.933 0.5 28.5 2.067 28.5 4V21C28.5 22.933 26.933 24.5 25 24.5H4C2.067 24.5 0.5 22.933 0.5 21V4Z"
                  stroke="#4B5B98"
                />
                <path
                  d="M3.5 5C3.5 4.17157 4.17157 3.5 5 3.5H24C24.8284 3.5 25.5 4.17157 25.5 5V19C25.5 19.8284 24.8284 20.5 24 20.5H5C4.17157 20.5 3.5 19.8284 3.5 19V5Z"
                  stroke="#4B5B98"
                />
                <path d="M3.5 7.5H10.5V16.5H3.5V7.5Z" stroke="#4B5B98" />
                <path d="M3.5 12.5H10.5V16.5H3.5V12.5Z" stroke="#4B5B98" />
                <path d="M10 9H19M19 15H10" stroke="#4B5B98" />
                <path d="M18.5 12.5H25.5V16.5H18.5V12.5Z" stroke="#4B5B98" />
                <path d="M18.5 7.5H25.5V16.5H18.5V7.5Z" stroke="#4B5B98" />
              </svg>
              <svg
                version="1.1"
                className="contactless mr-4"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                width="20px"
                height="20px"
                viewBox="0 0 50 50"
                xmlSpace="preserve"
              >
                {" "}
                <image
                  id="image0"
                  width={50}
                  height={50}
                  x={0}
                  y={0}
                  href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAQAAAC0NkA6AAAABGdBTUEAALGPC/xhBQAAACBjSFJN
        AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZ
        cwAACxMAAAsTAQCanBgAAAAHdElNRQfnAg0IEzgIwaKTAAADDklEQVRYw+1XS0iUURQ+f5qPyjQf
        lGRFEEFK76koKGxRbWyVVLSOgsCgwjZBJJYuKogSIoOonUK4q3U0WVBWFPZYiIE6kuArG3VGzK/F
        fPeMM/MLt99/NuHdfPd888/57jn3nvsQWWj/VcMlvMMd5KRTogqx9iCdIjUUmcGR9ImUYowyP3xN
        GQJoRLVaZ2DaZf8kyjEJALhI28ELioyiwC+Rc3QZwRYyO/DH51hQgWm6DMIh10KmD4u9O16K49it
        VoPOAmcGAWWOepXIRScAoJZ2Frro8oN+EyTT6lWkkg6msZfMSR35QTJmjU0g15tIGSJ08ZZMJkJk
        HpNZgSkyXosS13TkJpZ62mPIJvOSzC1bp8vRhhCakEk7G9/o4gmZdbpsTcKu0m63FbnBP9Qrc15z
        bkbemfgNDtEOI8NO5L5O9VYyRYgmJayZ9nPaxZrSjW4+F6Uw9yQqIiIZwhp2huQTf6OIvCZyGM6g
        DJBZbyXifJXr7FZjGXsdxADxI7HUJFB6iWvsIhFpkoiIiGTJfjJfiCuJg2ZEspq9EHGVpYgzKqwJ
        qSAOEwuJQ/pxPvE3cYltJCLdxBLiSKKIE5HxJKcTRNeadxfhDiuYw44zVs1dxKwRk/uCxIiQkxKB
        sSctRVAge9g1E15EHE6yRUaJecRxcWlukdRIbGFOSZCMWQA/iWauIP3slREHXPyliqBcrrD71Amz
        Z+rD1Mt2Yr8TZc/UR4/YtFnbijnHi3UrN9vKQ9rPaJf867ZiaqDB+czeKYmd3pNa6fuI75MiC0uX
        XSR5aEMf7s7a6r/PudVXkjFb/SsrCRfROk0Fx6+H1i9kkTGn/E1vEmt1m089fh+RKdQ5O+xNJPUi
        cUIjO0Dm7HwvErEr0YxeibL1StSh37STafE4I7zcBdRq1DiOkdmlTJVnkQTBTS7X1FYyvfO4piaI
        nKbDCDaT2anLudYXCRFsQBgAcIF2/Okwgvz5+Z4tsw118dzruvIvjhTB+HOuWy8UvovEH6beitBK
        xDyxm9MmISKCWrzB7bSlaqGlsf0FC0gMjzTg6GgAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjMtMDIt
        MTNUMDg6MTk6NTYrMDA6MDCjlq7LAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIzLTAyLTEzVDA4OjE5
        OjU2KzAwOjAw0ssWdwAAACh0RVh0ZGF0ZTp0aW1lc3RhbXAAMjAyMy0wMi0xM1QwODoxOTo1Nisw
        MDowMIXeN6gAAAAASUVORK5CYII="
                />
              </svg>
            </div>
            <p className="text-[22px] my-2">
              9759 &nbsp; 2484 &nbsp; 5269 &nbsp; 6576
            </p>
            <div className="flex items-center px-4 justify-between  h-[110px]">
              <div className=" w-1/2 text-[13px]">
                <p className="text-left">BRUCE WAYNE</p>
                <div className="flex justify-between my-2">
                  <p className="text-left">
                    <span className="text-xs c-text-gray">Expiry Date</span>{" "}
                    <br /> 12/2030
                  </p>
                  <p className="">
                    <span className="text-xs c-text-gray">CVV</span> <br /> 6986
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width={36}
                  height={36}
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#ff9800"
                    d="M32 10A14 14 0 1 0 32 38A14 14 0 1 0 32 10Z"
                  />
                  <path
                    fill="#d50000"
                    d="M16 10A14 14 0 1 0 16 38A14 14 0 1 0 16 10Z"
                  />
                  <path
                    fill="#ff3d00"
                    d="M18,24c0,4.755,2.376,8.95,6,11.48c3.624-2.53,6-6.725,6-11.48s-2.376-8.95-6-11.48 C20.376,15.05,18,19.245,18,24z"
                  />
                </svg>
                <p>MasterCard</p>
              </div>
            </div>
          </div>
          <div className="flip-card-back">
            <div className="strip" />
            <div className="mstrip" />
            <div className="sstrip">
              <p className="code">***</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisaCard;
