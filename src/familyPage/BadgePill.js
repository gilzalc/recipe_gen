import React from 'react';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import Icon from '@material-ui/core/Icon';

const StyledBadge = withStyles((theme) => ({
    badge: {
        right:-3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}))(Badge);

export default function CustomizedBadges({num}) {
    return (
        <Icon aria-label="cart">
            <StyledBadge badgeContent={num} color="secondary">
                <RestaurantIcon />
            </StyledBadge>
        </Icon>
    );
}
