/********************************************************************************
 * Copyright (c) 2023 BMW Group AG
 * Copyright (c) 2023 Contributors to the Eclipse Foundation
 *
 * See the NOTICE file(s) distributed with this work for additional
 * information regarding copyright ownership.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Apache License, Version 2.0 which is available at
 * https://www.apache.org/licenses/LICENSE-2.0.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 ********************************************************************************/

import { Box, type BoxProps, Divider, List, useTheme } from '@mui/material'
import uniqueId from 'lodash/uniqueId'
import { MenuItem, type MenuItemProps } from './MenuItem'

export interface NotificationBadgeType {
  notificationCount: number
  isNotificationAlert: boolean
}

export interface MenuProps extends BoxProps {
  items: MenuItemProps[]
  component?: React.ElementType
  divider?: boolean
  notificationInfo?: NotificationBadgeType
}

export const Menu = ({
  items,
  divider,
  component,
  onClick,
  notificationInfo,
  ...props
}: MenuProps) => {
  const { spacing } = useTheme()

  return (
    <Box {...props} className="cx-menu">
      <List sx={{ padding: 0 }} className="cx-menu__list">
        {items?.map((item) => (
          <MenuItem
            {...item}
            component={component}
            menuProps={props}
            Menu={Menu}
            onClick={onClick}
            key={uniqueId('Menu')}
            showNotificationCount={item.to === 'notifications'}
            notificationInfo={notificationInfo}
          />
        ))}
      </List>
      {divider && (
        <Divider className="cx-menu__divider" sx={{ margin: spacing(0, 1) }} />
      )}
    </Box>
  )
}

export type MenuType = typeof Menu
