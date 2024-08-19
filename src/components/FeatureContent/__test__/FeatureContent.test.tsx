import { render } from '@testing-library/react';

// Components
import FeatureContent from '..';

describe('FeatureContent Component', () => {
  it('should match snapshot for FeatureContent', () => {
    const { container } = render(<FeatureContent />);

    expect(container).toMatchSnapshot();
  });
});
