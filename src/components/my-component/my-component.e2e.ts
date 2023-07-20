import { newE2EPage } from '@stencil/core/testing';

describe('my-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<my-component></my-component>');
    const element = await page.find('my-component');
    expect(element).toHaveClass('hydrated');
  });

  // This test fails unexpectedly due to emulate viewport width not overriding 
  // (browser width less than 934px wide)
  
  it('can click the desktop content', async () => {
    const page = await newE2EPage();

    await page.setContent('<my-component></my-component>');
    const link = await page.find('::-p-text(Hello, World! Desktop only!)');
    
    await link.click();
    await page.waitForChanges();
  });

  it('can click the mobile content', async () => {
    const page = await newE2EPage();

    await page.setContent('<my-component></my-component>');
    const link = await page.find('::-p-text(Hello, World! Mobile only!)');

    await link.click();
    await page.waitForChanges();
  });
});
