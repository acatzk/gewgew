export default function LoadingScreen () {
  return (
    <div className="inset-0 w-full h-screen flex flex-col items-center justify-center space-y-2">
      <svg className="text-black" width="32px" height="32px" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" >
        <g transform="translate(1 1)" stroke-width="2" fill="none" fill-rule="evenodd">
          <circle stroke-opacity=".5" cx="18" cy="18" r="18"></circle>
          <path d="M36 18c0-9.94-8.06-18-18-18">
            <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s"
              repeatCount="indefinite"></animateTransform>
          </path>
        </g>
      </svg>
      <span className="text-xs font-light">Loading...</span>
    </div>
  )
}