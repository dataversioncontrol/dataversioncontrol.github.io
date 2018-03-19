import React from 'react'
import styled from 'styled-components'
import Close, { Wrapper as CloseButton } from '../Close'
import DownloadPopupContent from '../DownloadPopupContent'
import { container } from '../../styles'

export default ({
  onClose,
  downloadOSX,
  downloadLinux,
  downloadLinuxRPM,
  downloadWin
}) => (
  <DownloadPopup onClick={onClose}>
    <Box onClick={(e) => {
      e.stopPropagation()
    }}>
      <Inner>
        <Content>
          <Close onClick={onClose} />

          <DownloadPopupContent
            downloadOSX={downloadOSX}
            downloadLinux={downloadLinux}
            downloadLinuxRPM={downloadLinuxRPM}
            downloadWin={downloadWin}
          />
        </Content>
      </Inner>
    </Box>
  </DownloadPopup>
)

const DownloadPopup = styled.div`
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  z-index: 9999999;
`

const Box = styled.div`
  ${container} width: 100%;
  transform: translateY(-50%);

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);

 @media screen and (max-width: 768px) {
    position: absolute;
    top: 12px;
    left: 0px;
    transform: translateX(0px) translateY(0px);
  }
`

const padding = 22

const Inner = styled.div`
  background: #f4f9ff url('/download_popup.png') bottom center no-repeat;
  border-radius: 12px;
  position: relative;
  max-height: 570px;

 @media screen and (max-width: 768px) {
    max-height: none;
    overflow: scroll;
  }

  ${CloseButton} {
    top: ${padding}px;
    right: ${padding}px;
    position: absolute;
  }
`

const Content = styled.div`
  padding: ${padding}px;
`
