import React from 'react'
import PropTypes from 'prop-types'

import { SuccessErrorIcon } from '../home/style'

function IconSuccessError({ status }) {
  let color
  if (status === 'success') {
    color = '#00e98b'
  } else if (status === 'error') {
    color = '#FF6B63'
  } else {
    color = '#FF783C'
  }
  return (
    <SuccessErrorIcon shadow viewBox="0 0 152 56">
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g id="Logo" transform="translate(-99.000000, -226.000000)">
          <g id="success-error" transform="translate(99.000000, 226.000000)">
            <g id="Group" fillRule="nonzero">
              <g
                transform="translate(0.000000, 15.655914)"
                fill={color}
                id="Path"
              >
                <path d="M40.2775873,25.6570323 C28.8896508,28.9170753 17.6549206,33.7493333 6.7235873,40.1532043 C8.43057143,34.5194839 10.2847302,28.9122581 12.2866667,23.3447742 C8.40765079,20.7543226 4.41825397,18.3348817 0.320888889,16.1015054 C12.2619365,9.10632258 24.534127,3.82726882 36.974,0.265548387 C38.0747937,8.72937634 39.1761905,17.1932043 40.2775873,25.6570323 Z" />
                <path d="M111.803841,25.6570323 C123.191778,28.9170753 134.426508,33.7493333 145.357841,40.1532043 C143.650857,34.5194839 141.796698,28.9122581 139.794762,23.3447742 C143.673778,20.7543226 147.663778,18.3348817 151.761143,16.1015054 C139.819492,9.10632258 127.547302,3.82726882 115.107429,0.265548387 C114.006635,8.72937634 112.905238,17.1932043 111.803841,25.6570323 Z" />
              </g>
              <g
                transform="translate(27.746032, 27.698925)"
                fill={'#6B6B6D'}
                id="Path"
              >
                <path d="M12.5315556,13.6140215 C12.5315556,13.6140215 10.4590476,7.0036129 0.991015873,7.11621505 L0.43247619,3.79294624 L10.8137143,0.415483871 L12.5315556,13.6140215 Z" />
                <path d="M84.0578095,13.6140215 C84.0578095,13.6140215 86.1303175,7.0036129 95.5983492,7.11621505 L96.1568889,3.79294624 L85.7756508,0.415483871 L84.0578095,13.6140215 Z" />
              </g>
              <path
                d="M127.562381,9.72473118 C93.7381587,-2.78916129 58.343873,-2.78916129 24.5196508,9.72473118 C25.9256508,18.088 27.3316508,26.451871 28.7376508,34.8145376 C59.7926984,23.3255054 92.2899365,23.3255054 123.344984,34.8145376 C124.750381,26.451871 126.156381,18.088 127.562381,9.72473118 Z"
                id="Path"
                fill={color}
              />
            </g>
            <text
              id="ERROR"
              fontFamily="AvenirNext-DemiBold, Avenir Next"
              fontSize="14"
              fontWeight="500"
              fill="#FFFFFF"
            >
              <tspan x={status === 'success' ? '50' : '53'} y="20">
                {status === 'success' && 'WINNER'}
                {status === 'error' && 'ERROR'}
                {status === 'draw' && 'DRAW'}
              </tspan>
            </text>
          </g>
        </g>
      </g>
    </SuccessErrorIcon>
  )
}

IconSuccessError.propTypes = {
  status: PropTypes.string,
}

export default IconSuccessError
