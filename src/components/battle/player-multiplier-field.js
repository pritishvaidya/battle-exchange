import React from 'react'
import PropTypes from 'prop-types'
import CountUp from 'react-countup'

import { FieldWrapper, Name, Value } from './style'

function PlayerMultiplierField({ name, value, start, prefix, formattingFn }) {
  return (
    <FieldWrapper>
      <Name>{name}:</Name>
      <Value>
        {start ? (
          <>
            {prefix}
            <CountUp end={value} formattingFn={formattingFn} />
          </>
        ) : (
          0
        )}
      </Value>
    </FieldWrapper>
  )
}

PlayerMultiplierField.propTypes = {
  name: PropTypes.string,
  value: PropTypes.number,
  start: PropTypes.bool,
  prefix: PropTypes.string,
  formattingFn: PropTypes.func,
}

export default PlayerMultiplierField
