import React from 'react';
import {
  ComponentParams,
  ComponentRendering,
  Placeholder,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface ComponentProps {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
}

export const Default = (props: ComponentProps): JSX.Element => {
  const styles = `${props.params.GridParameters ?? ''} ${props.params.Styles ?? ''}`.trimEnd();
  const columnWidths = [props.params.ColumnWidth1, props.params.ColumnWidth2];
  const columnStyles = [props.params.Styles1, props.params.Styles2];
  const enabledPlaceholders = props.params.EnabledPlaceholders.split(',');
  const id = props.params.RenderingIdentifier;
  console.log('Twocontainer plch');
  console.log(enabledPlaceholders);
  return (
    <div className={`row component column-splitter ${styles}`} id={id ? id : undefined}>
      {enabledPlaceholders.map((ph, index) => {
        const phKey = `containercolumn-${ph}-{*}`;
        const phStyles = `${columnWidths[+ph - 1]} ${columnStyles[+ph - 1] ?? ''}`.trimEnd();

        return (
          <div key={index} className={phStyles}>
            <div key={index} className="row">
              <Placeholder key={index} name={phKey} rendering={props.rendering} />
            </div>
          </div>
        );
      })}
    </div>
  );
};
