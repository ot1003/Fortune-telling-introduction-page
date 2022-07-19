export const support = (pseudo) => {
  try {
    if (!document.querySelector) return null;

    document.querySelector(pseudo);
  } catch {
    return false;
  }

  return true;
};