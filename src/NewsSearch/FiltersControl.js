import React from 'react';
import { Dropdown, Search, Grid } from 'semantic-ui-react';
import { CONTROL_TYPE } from './Config';

const FiltersControl = props => {
  const { filters, action, parentState } = props;
  
  return (
    <div className="ui">
      <Grid columns={filters.length}>
        <Grid.Row>
        {filters.map(filter => {
          switch (filter.controlType) {
            case CONTROL_TYPE.DROPDOWN:
              return (
                <Grid.Column key={filter.stateKey}>
                  <Dropdown
                    placeholder={filter.placeholder}
                    selection
                    fluid
                    options={filter.options}
                    defaultValue={parentState[filter.stateKey]}
                    onChange={(e, data) => action(filter.stateKey, data.value)}
                  ></Dropdown>
                </Grid.Column>
              );
            default:
              return (
                <Grid.Column key={filter.stateKey}>
                  <Search
                    loading={filter.isLoading}
                    fluid
                    onKeyPress={(e) => e.key === 'Enter' && action(filter.stateKey, e.target.value)}
                    showNoResults={false}
                  ></Search>
                </Grid.Column>
              );
          }
        })}
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default FiltersControl;
