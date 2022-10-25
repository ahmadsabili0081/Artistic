import styled from "styled-components";

let LogoStyles = styled.div`
  max-width: 150px;
  svg{
    width: 100%;
    height: 100%;
  }
`;

let Logo = () => {
  return (
    <LogoStyles>
      <svg width="71" height="19" viewBox="0 0 71 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.44 17.688C2.328 18.04 2.072 18.216 1.672 18.216C1.288 18.216 0.848 18 0.352 17.568C0.832 16.16 1.848 13.896 3.4 10.776C4.952 7.64 5.96 5.296 6.424 3.744C6.488 3.488 6.52 3.312 6.52 3.216C6.52 2.976 6.344 2.608 5.992 2.112L5.8 1.848L5.848 1.536C7.208 1.152 8.712 0.959999 10.36 0.959999L11.824 1.056C12 1.296 12.136 1.664 12.232 2.16C12.488 3.376 12.616 6.504 12.616 11.544C12.616 13.496 12.784 14.872 13.12 15.672C13.248 15.976 13.376 16.128 13.504 16.128C13.632 16.128 14.024 15.968 14.68 15.648L14.992 15.504L15.472 16.368C14.864 16.96 14.184 17.432 13.432 17.784C12.696 18.12 12.016 18.288 11.392 18.288C9.776 18.288 8.968 17.032 8.968 14.52V12.624C8.552 12.528 7.92 12.48 7.072 12.48C6.224 12.48 5.296 12.56 4.288 12.72C3.488 14.576 2.872 16.232 2.44 17.688ZM9.016 10.992L9.04 8.208C9.04 5.776 8.936 4.128 8.728 3.264C8.6 3.264 8.504 3.28 8.44 3.312C7.992 4.544 7.568 5.592 7.168 6.456C6.784 7.304 6.36 8.216 5.896 9.192C5.448 10.152 5.168 10.752 5.056 10.992H9.016ZM16.0281 18.072H15.8601C15.8281 17.944 15.8121 17.656 15.8121 17.208C15.8121 16.744 16.0281 15.512 16.4601 13.512C16.8921 11.512 17.1081 10.368 17.1081 10.08C17.1081 9.584 16.8841 9.04 16.4361 8.448L16.2201 8.16L16.2441 7.848C17.1081 7.608 18.4921 7.488 20.3961 7.488C20.5881 7.904 20.6841 8.488 20.6841 9.24C20.8601 8.952 21.2281 8.568 21.7881 8.088C22.3481 7.608 22.9241 7.368 23.5161 7.368C24.3801 7.368 24.8121 8.12 24.8121 9.624C24.7321 9.72 24.6201 9.848 24.4761 10.008C24.3481 10.152 24.0761 10.36 23.6601 10.632C23.2601 10.904 22.8681 11.072 22.4841 11.136C22.4681 11.136 22.3321 10.92 22.0761 10.488C21.8201 10.056 21.6281 9.84 21.5001 9.84C21.1001 9.984 20.7481 10.224 20.4441 10.56C19.7081 13.872 19.3401 16.016 19.3401 16.992C19.3401 17.344 19.3481 17.592 19.3641 17.736C18.8041 17.96 17.6921 18.072 16.0281 18.072ZM32.2711 7.656C32.2391 8.056 32.1031 8.52 31.8631 9.048C31.2551 8.984 30.6791 8.952 30.1351 8.952H29.7031C28.9671 12.52 28.5991 14.744 28.5991 15.624C28.5991 16.088 28.6951 16.32 28.8871 16.32C29.0951 16.32 29.6311 16.12 30.4951 15.72L30.9271 16.512C29.5031 17.696 28.1831 18.288 26.9671 18.288C26.4071 18.288 25.9431 18.112 25.5751 17.76C25.2231 17.408 25.0471 16.944 25.0471 16.368C25.0471 15.776 25.1111 15.112 25.2391 14.376C25.3831 13.64 25.5751 12.744 25.8151 11.688C26.0551 10.616 26.2311 9.752 26.3431 9.096C25.7511 9.144 25.3111 9.192 25.0231 9.24C24.9911 9.048 24.9751 8.792 24.9751 8.472C24.9751 8.136 24.9991 7.864 25.0471 7.656H26.5591C26.6871 6.792 26.7511 5.976 26.7511 5.208L26.7271 4.464V4.392C27.9751 3.96 29.1511 3.744 30.2551 3.744C30.3191 4.064 30.3511 4.464 30.3511 4.944C30.3511 5.424 30.2151 6.328 29.9431 7.656H32.2711ZM37.0396 8.856C37.0396 9.528 36.8236 10.688 36.3916 12.336C35.9596 13.968 35.7436 15.04 35.7436 15.552C35.7436 16.048 35.8156 16.296 35.9596 16.296C36.0556 16.296 36.4236 16.144 37.0636 15.84L37.3516 15.696L37.7596 16.536C37.6156 16.664 37.4236 16.824 37.1836 17.016C36.9436 17.208 36.4956 17.472 35.8396 17.808C35.1836 18.128 34.5756 18.288 34.0156 18.288C33.4556 18.288 33.0156 18.12 32.6956 17.784C32.3756 17.432 32.2156 16.968 32.2156 16.392C32.2156 15.8 32.4156 14.76 32.8156 13.272C33.2156 11.768 33.4156 10.792 33.4156 10.344C33.4156 9.672 33.2076 9.04 32.7916 8.448L32.5756 8.16L32.5996 7.848C33.4476 7.608 34.8236 7.488 36.7276 7.488C36.9356 7.728 37.0396 8.184 37.0396 8.856ZM34.3036 4.872C33.9836 4.552 33.8236 4.128 33.8236 3.6C33.8236 3.072 34.0396 2.608 34.4716 2.208C34.9196 1.808 35.4316 1.608 36.0076 1.608C36.5836 1.608 37.0316 1.768 37.3516 2.088C37.6716 2.408 37.8316 2.832 37.8316 3.36C37.8316 3.872 37.5996 4.328 37.1356 4.728C36.6876 5.128 36.1836 5.328 35.6236 5.328C35.0636 5.328 34.6236 5.176 34.3036 4.872ZM46.0266 14.856C46.0266 15.864 45.5786 16.688 44.6826 17.328C43.8026 17.968 42.7946 18.288 41.6586 18.288C40.5226 18.288 39.6186 18.048 38.9466 17.568C38.2906 17.088 37.9626 16.664 37.9626 16.296C37.9626 16.072 38.2426 15.712 38.8026 15.216C39.3626 14.704 39.8346 14.392 40.2186 14.28C41.0186 14.872 41.6746 15.808 42.1866 17.088C42.7786 17.04 43.0746 16.76 43.0746 16.248C43.0746 15.512 42.4266 14.472 41.1306 13.128C39.8346 11.768 39.1866 10.688 39.1866 9.888C39.1866 9.088 39.5466 8.472 40.2666 8.04C40.9866 7.592 41.8506 7.368 42.8586 7.368C43.8826 7.368 44.6506 7.552 45.1626 7.92C45.6746 8.272 45.9306 8.76 45.9306 9.384C45.9306 9.992 45.4426 10.84 44.4666 11.928C44.5786 12.04 44.7226 12.192 44.8986 12.384C45.0746 12.56 45.3066 12.904 45.5946 13.416C45.8826 13.928 46.0266 14.408 46.0266 14.856ZM43.7226 11.088C44.3946 10.512 44.7306 9.944 44.7306 9.384C44.7306 8.824 44.3466 8.544 43.5786 8.544C43.2106 8.544 42.9066 8.624 42.6666 8.784C42.4266 8.928 42.3066 9.096 42.3066 9.288C42.3066 9.64 42.6586 10.136 43.3626 10.776L43.7226 11.088ZM54.6539 7.656C54.6219 8.056 54.4859 8.52 54.2459 9.048C53.6379 8.984 53.0619 8.952 52.5179 8.952H52.0859C51.3499 12.52 50.9819 14.744 50.9819 15.624C50.9819 16.088 51.0779 16.32 51.2699 16.32C51.4779 16.32 52.0139 16.12 52.8779 15.72L53.3099 16.512C51.8859 17.696 50.5659 18.288 49.3499 18.288C48.7899 18.288 48.3259 18.112 47.9579 17.76C47.6059 17.408 47.4299 16.944 47.4299 16.368C47.4299 15.776 47.4939 15.112 47.6219 14.376C47.7659 13.64 47.9579 12.744 48.1979 11.688C48.4379 10.616 48.6139 9.752 48.7259 9.096C48.1339 9.144 47.6939 9.192 47.4059 9.24C47.3739 9.048 47.3579 8.792 47.3579 8.472C47.3579 8.136 47.3819 7.864 47.4299 7.656H48.9419C49.0699 6.792 49.1339 5.976 49.1339 5.208L49.1099 4.464V4.392C50.3579 3.96 51.5339 3.744 52.6379 3.744C52.7019 4.064 52.7339 4.464 52.7339 4.944C52.7339 5.424 52.5979 6.328 52.3259 7.656H54.6539ZM59.4224 8.856C59.4224 9.528 59.2064 10.688 58.7744 12.336C58.3424 13.968 58.1264 15.04 58.1264 15.552C58.1264 16.048 58.1984 16.296 58.3424 16.296C58.4384 16.296 58.8064 16.144 59.4464 15.84L59.7344 15.696L60.1424 16.536C59.9984 16.664 59.8064 16.824 59.5664 17.016C59.3264 17.208 58.8784 17.472 58.2224 17.808C57.5664 18.128 56.9584 18.288 56.3984 18.288C55.8384 18.288 55.3984 18.12 55.0784 17.784C54.7584 17.432 54.5984 16.968 54.5984 16.392C54.5984 15.8 54.7984 14.76 55.1984 13.272C55.5984 11.768 55.7984 10.792 55.7984 10.344C55.7984 9.672 55.5904 9.04 55.1744 8.448L54.9584 8.16L54.9824 7.848C55.8304 7.608 57.2064 7.488 59.1104 7.488C59.3184 7.728 59.4224 8.184 59.4224 8.856ZM56.6864 4.872C56.3664 4.552 56.2064 4.128 56.2064 3.6C56.2064 3.072 56.4224 2.608 56.8544 2.208C57.3024 1.808 57.8144 1.608 58.3904 1.608C58.9664 1.608 59.4144 1.768 59.7344 2.088C60.0544 2.408 60.2144 2.832 60.2144 3.36C60.2144 3.872 59.9824 4.328 59.5184 4.728C59.0704 5.128 58.5664 5.328 58.0064 5.328C57.4464 5.328 57.0064 5.176 56.6864 4.872ZM66.5134 8.568C65.8734 8.568 65.3614 9.104 64.9774 10.176C64.5934 11.232 64.4014 12.368 64.4014 13.584C64.4014 15.504 64.9934 16.464 66.1774 16.464C66.5614 16.464 66.9694 16.376 67.4014 16.2C67.8334 16.008 68.1774 15.824 68.4334 15.648L68.7934 15.36L69.3454 16.104C69.2174 16.28 68.9614 16.512 68.5774 16.8C68.1934 17.088 67.8334 17.328 67.4974 17.52C67.1614 17.712 66.7294 17.888 66.2014 18.048C65.6734 18.208 65.1534 18.288 64.6414 18.288C63.3934 18.288 62.4574 17.88 61.8334 17.064C61.2094 16.248 60.8974 15.152 60.8974 13.776C60.8974 11.872 61.4174 10.328 62.4574 9.144C63.5134 7.96 64.8654 7.368 66.5134 7.368C67.5854 7.368 68.4334 7.616 69.0574 8.112C69.6974 8.592 70.0174 9.192 70.0174 9.912C70.0174 10.616 69.7934 11.224 69.3454 11.736C68.9454 11.736 68.4814 11.648 67.9534 11.472C67.4254 11.296 67.0254 11.08 66.7534 10.824L67.1134 8.712C66.9694 8.616 66.7694 8.568 66.5134 8.568Z" fill="#6C62E2"/>
      </svg>
    </LogoStyles>
  )
}
export default Logo;