import React from 'react'
import PropTypes from 'prop-types'

import { Badge, BadgeDot, BadgeWrapper } from './style'
import { Badges } from '../../theme'

function PlayerBadge({ gold, silver, bronze }) {
  return (
    <BadgeWrapper>
      {!!gold && (
        <Badge background={Badges.gold.background} border={Badges.gold.border}>
          <BadgeDot color={Badges.gold.dot} />
          {gold}
        </Badge>
      )}
      {!!silver && (
        <Badge
          background={Badges.silver.background}
          border={Badges.silver.border}
        >
          <BadgeDot color={Badges.silver.dot} />
          {silver}
        </Badge>
      )}
      {!!bronze && (
        <Badge
          background={Badges.bronze.background}
          border={Badges.bronze.border}
        >
          <BadgeDot color={Badges.bronze.dot} />
          {bronze}
        </Badge>
      )}
    </BadgeWrapper>
  )
}

PlayerBadge.propTypes = {
  gold: PropTypes.number,
  silver: PropTypes.number,
  bronze: PropTypes.number,
}

export default PlayerBadge
